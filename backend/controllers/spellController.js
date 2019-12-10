const Spell = require('../models/Spell');

// Get all Spells
exports.spell_list = (req, res, next) => {
  const queryParams = req.query;

  const spellId = queryParams.spellId || '';
  const filter = queryParams.filter || '';
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 0;

  console.log('Api Get Spells', spellId, filter, sortOrder, pageNumber, pageSize);

  Spell.find({})
    .populate('traits')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      res.json(result);
    });
};
