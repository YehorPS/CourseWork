const User = require('../models/User');

exports.getDashboard = async (req, res) => {
    try {
        const users = await User.find();
        res.render('admin/dashboard', { users });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
};

exports.blockUser = async (req, res) => {
    const { userId, blockReason } = req.body;
    try {
        await User.findByIdAndUpdate(userId, { blocked: true, blockReason });
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/admin/dashboard');
    }
};
