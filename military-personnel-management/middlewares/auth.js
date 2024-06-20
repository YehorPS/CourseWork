const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.ensureAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/auth/login');
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.redirect('/auth/login');
    }
};

exports.ensureAdmin = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/auth/login');
    }

    try {
        const decoded = jwt.verify(token, 'secret');
        const user = await User.findById(decoded.id);
        if (user.role !== 'admin') {
            return res.redirect('/');
        }
        req.user = user;
        next();
    } catch (error) {
        res.redirect('/auth/login');
    }
};
