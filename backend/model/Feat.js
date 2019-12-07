const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ACTION_TYPES = ['1_ACTION', '2_ACTION', '3_ACTION', 'REACTION', 'FREE', 'NONE'];

// Define collection and schema
let FeatSchema = new Schema(
  {
    feat_name: { type: String, required: true },
    traits: [{ type: Schema.Types.ObjectId, ref: 'Trait' }],
    short_description: String,
    description: { type: String, required: true },
    successText: String,
    critSuccessText: String,
    failText: String,
    critFailText: String,
    actions: {
      type: String,
      enum: ACTION_TYPES,
      required: true
    },
    level_requirement: { type: Number, min: 1, max: 20 },
    prerequisites: String,
    frequency: String,
    cost: String,
    trigger: String,
    requirements: String,
    special: String,
    source: String
  },
  {
    collection: 'feats'
  }
);

module.exports = mongoose.model('Feat', FeatSchema);
