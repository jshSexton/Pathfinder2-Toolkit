const express = require('express');
const spellRoute = express.Router();
const spellController = require('../controllers/spellController');

spellRoute.route('/spells/list').get(spellController.spell_list);
spellRoute.route('/spells/single').get(spellController.spell_get_single);

module.exports = spellRoute;
