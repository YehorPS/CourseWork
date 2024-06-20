const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.getLogin = (req, res) => {
    console.log('GET /login route hit');
    res.render('login');
};

exports.postLogin = async (req, res) => {
    console.log('POST /login route hit');
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.user = user;
            res.redirect('/user/dashboard');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
};

exports.getRegister = (req, res) => {
    console.log('GET /register route hit');
    res.render('register');
};

exports.postRegister = async (req, res) => {
    console.log('POST /register route hit');
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, role });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
};

exports.logout = (req, res) => {
    console.log('GET /logout route hit');
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/auth/login');
    });
};
