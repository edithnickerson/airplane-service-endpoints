var mongoose = require('mongoose');

var landingdataSchema = new mongoose.Schema({
    Setting: Number,
    Weight: Number,
    Vapp: Number,
    Vref: Number,
    Vga: Number
});

var landingdataSchema = mongoose.model('landingdata', landingdataSchema, 'landingdata');
