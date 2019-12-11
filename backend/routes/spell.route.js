const express = require('express');
const spellRoute = express.Router();
const spellController = require('../controllers/spellController');

spellRoute.route('/spells').get(spellController.spell_list);

module.exports = spellRoute;
