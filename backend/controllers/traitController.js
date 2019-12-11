const Trait = require('../models/Trait');

// Get All Traits
exports.trait_list = (req, res, next) => {
  Trait.find({})
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }

      // Remap db fields to fields front-end expects
      res.json(
        result.map(trait => {
          return {
            id: trait._id,
            name: trait.trait_name,
            type: trait.types
          };
        })
      );
    });
};
