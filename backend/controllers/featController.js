const Feat = require('../models/Feat');

// Get All Feats
exports.feat_list = (req, res, next) => {
  const queryParams = req.query;

  const featId = queryParams.featId || '';
  const filter = queryParams.filter || '';
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 0;

  console.log('Api Get Feats', featId, filter, sortOrder, pageNumber, pageSize);

  Feat.find({})
    .populate('traits')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(
        result.map(feat => {
          return {
            id: feat._id,
            name: feat.feat_name,
            traits: feat.traits.map(trait => {
              return {
                id: trait._id,
                name: trait.trait_name,
                type: trait.types
              };
            }),
            description: feat.description,
            shortDesc: feat.short_description,
            successText: feat.successText,
            critSuccessText: feat.critSuccessText,
            failText: feat.failText,
            critFailText: feat.critFailText,
            actions: feat.actions,
            levelRequirement: feat.level_requirement,
            prerequisites: feat.prerequisites,
            frequency: feat.frequency,
            cost: feat.cost,
            trigger: feat.trigger,
            requirements: feat.requirements,
            special: feat.special
          };
        })
      );
    });
};
