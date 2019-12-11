const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TRADITION_TYPES = ['ARCANE', 'PRIMAL', 'OCCULT', 'DIVINE'];
const CASTING_COMPONENT_TYPES = ['SOMATIC', 'VERBAL', 'MATERIAL'];
const SAVING_THROW_TYPES = ['WILL', 'REFLEX', 'FORTITUDE'];

// Define collection and schema
let SpellSchema = new Schema(
  {
    spell_name: { type: String, required: true },
    traits: [{ type: Schema.Types.ObjectId, ref: 'Trait' }],
    short_description: String,
    description: { type: String, required: true },
    successText: String,
    critSuccessText: String,
    failText: String,
    critFailText: String,
    level: { type: Number, min: 0, max: 10, required: true },
    traditions: [{ type: String, enum: TRADITION_TYPES, required: true }],
    casting_time: { type: String, required: true },
    component: [{ type: String, enum: CASTING_COMPONENT_TYPES }],
    cost: String,
    requirements: String,
    trigger: String,
    range: String,
    targets: String,
    duration: String,
    area: String,
    saving_throw: { type: String, enum: SAVING_THROW_TYPES },
    heightened: [
      {
        trigger_level: String,
        description: String
      }
    ],
    affliction: { type: Schema.Types.ObjectId, ref: 'Affliction' },
    source: String
  },
  {
    collection: 'spells'
  }
);

module.exports = mongoose.model('Spell', SpellSchema);
