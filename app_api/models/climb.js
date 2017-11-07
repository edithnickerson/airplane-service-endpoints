var mongoose = require('mongoose');

var climbdataSchema = new mongoose.Schema({
    Weight: Number,
    Flaps5: Number,
    Flaps10: Number,
    Flaps15: Number,
    VClimb: Number
});

var climbdata = mongoose.model('climbdata', climbdataSchema, 'climbdata');