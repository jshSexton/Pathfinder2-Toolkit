const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let AfflictionSchema = new Schema(
  {
    affliction_name: { type: String, required: true },
    level: Number,
    type: String,
    onset: String,
    rule_text: String,
    stages: [
      {
        level: Number,
        effect: String,
        duration: String
      }
    ],
    source: String
  },
  {
    collection: 'afflictions'
  }
);

module.exports = mongoose.model('Affliction', AfflictionSchema);
