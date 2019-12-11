const express = require('express');
const featRoute = express.Router();
const featController = require('../controllers/featController');

featRoute.route('/feats/list').get(featController.feat_list);
featRoute.route('/feats/single').get(featController.feat_get_single);

module.exports = featRoute;
