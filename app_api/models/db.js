var mongoose = require('mongoose');

var connectionstring ="mongodb://edith:edith@ds113505.mlab.com:13505/airplanedb";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

require('./climb');
require('./takeoff');
require('./landing');