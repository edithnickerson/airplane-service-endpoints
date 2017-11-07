var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var ctrlclimb = require('../controllers/climbController');
var ctrltakeoff = require('../controllers/takeoffController');
var ctrllanding = require('../controllers/landingController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Airport DataBase Endpoints' });
});

router.get('/climb/:weight/:value', ctrlclimb.climbInfo);

router.get('/takeoff/:weight/:setting/:temp/:altitude/:value', ctrltakeoff.takeoffInfo);

router.get('/landing/:weight/:setting/:value', ctrllanding.landingInfo);

module.exports = router;
