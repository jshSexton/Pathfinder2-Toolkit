const express = require('express');
const traitRoute = express.Router();
const traitController = require('../controllers/traitController');

traitRoute.route('/traits').get(traitController.trait_list);

module.exports = traitRoute;
