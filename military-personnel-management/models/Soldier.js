const mongoose = require('mongoose');

const SoldierSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    middleName: { type: String, required: true },
    rank: { type: String, required: true },
    birthYear: { type: Number, required: true }
});

module.exports = mongoose.model('Soldier', SoldierSchema);
