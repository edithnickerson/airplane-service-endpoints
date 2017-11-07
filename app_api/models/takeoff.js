var mongoose = require('mongoose');

var takeoffdataSchema = new mongoose.Schema({
    Setting: Number,
    Temp: String,
    Weight: Number,
    Altitude: Number,
    Vr: Number,
    V2: Number
});
