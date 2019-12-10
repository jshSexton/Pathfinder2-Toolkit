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
      res.json(result);
    });
};
