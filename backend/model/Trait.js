const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TRAIT_TYPES = [
  'UNTYPED',
  'ALIGNMENT',
  'ANCESTRY',
  'ARMOR',
  'CLASS',
  'CREATURE_TYPE',
  'ELEMENTAL',
  'ENERGY',
  'EQUIPMENT',
  'MONSTER',
  'POISON',
  'RARITY',
  'SCHOOL',
  'TRADITION',
  'WEAPON'
];

let TraitSchema = new Schema(
  {
    trait_name: String,
    types: [{ type: String, enum: TRAIT_TYPES }]
  },
  {
    collection: 'traits'
  }
);

module.exports = mongoose.model('Trait', TraitSchema);
