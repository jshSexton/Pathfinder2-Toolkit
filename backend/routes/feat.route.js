const express = require('express');
const featRoute = express.Router();
const featController = require('../controllers/featController');

featRoute.route('/feats').get(featController.feat_list);

module.exports = featRoute;
