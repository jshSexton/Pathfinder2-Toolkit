const Trait = require('../models/Trait');

// Get All Traits
exports.trait_list = (req, res, next) => {
  Trait.find({})
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }

      res.json(result);
    });
};
