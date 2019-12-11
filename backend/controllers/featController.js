require('../models/Trait');

const Feat = require('../models/Feat');

// Get All Feats
exports.feat_list = (req, res, next) => {
  const queryParams = req.query;

  const featId = queryParams.featId || '';
  const filterName = queryParams.filterName || '';
  const filterLevelMin = parseInt(queryParams.filterLevelMin) || 0;
  const filterLevelMax = parseInt(queryParams.filterLevelMax) || 0;
  const filterAction = queryParams.filterAction || '';
  const filterTraits = queryParams.filterTraits ? queryParams.filterTraits.split(',') : [];
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 0;

  console.log(
    'Api Get Feats',
    `filterName: ${filterName},`,
    `filterLevelMin: ${filterLevelMin},`,
    `filterLevelMax: ${filterLevelMax},`,
    `filterAction: ${filterAction},`,
    `filterTraits: ${filterTraits},`,
    `sortOrder: ${sortOrder},`,
    `pageNumber: ${pageNumber},`,
    `pageSize: ${pageSize},`
  );

  Feat.find({})
    .populate('traits')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(result.map(mapDBToFE));
    });
};

exports.feat_get_single = (req, res, next) => {
  const queryParams = req.query;

  const featId = queryParams.featId || '';

  console.log('Api Get Single Feat', `featId: ${featId}`);

  Feat.findById(featId)
    .populate('traits')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(mapDBToFE(result));
    });
};

function mapDBToFE(feat) {
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
}
