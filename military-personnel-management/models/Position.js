const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    soldierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Soldier', required: true },
    unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true }
});

module.exports = mongoose.model('Position', PositionSchema);
