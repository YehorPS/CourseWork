const Soldier = require('../models/Soldier');
const Position = require('../models/Position');
const Unit = require('../models/Unit');

exports.getDashboard = async (req, res) => {
    try {
        const soldiers = await Soldier.find();
        res.render('user/dashboard', { soldiers });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
};

exports.addSoldier = async (req, res) => {
    const { firstName, lastName, middleName, rank, birthYear, unitId, positionName } = req.body;
    try {
        const soldier = new Soldier({ firstName, lastName, middleName, rank, birthYear });
        await soldier.save();

        const position = new Position({ name: positionName, soldierId: soldier._id, unitId });
        await position.save();

        res.redirect('/user/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/user/dashboard');
    }
};

exports.editSoldier = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, middleName, rank, birthYear } = req.body;
    try {
        await Soldier.findByIdAndUpdate(id, { firstName, lastName, middleName, rank, birthYear });
        res.redirect('/user/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/user/dashboard');
    }
};

exports.deleteSoldier = async (req, res) => {
    const { id } = req.params;
    try {
        await Soldier.findByIdAndDelete(id);
        res.redirect('/user/dashboard');
    } catch (error) {
        console.error(error);
        res.redirect('/user/dashboard');
    }
};
