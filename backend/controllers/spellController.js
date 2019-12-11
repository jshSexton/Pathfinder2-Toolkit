require('../models/Trait');
require('../models/Affliction');

const Spell = require('../models/Spell');

// Get all Spells
exports.spell_list = (req, res, next) => {
  const queryParams = req.query;

  const spellId = queryParams.spellId || '';
  const filterName = queryParams.filterName || '';
  const filterLevelMin = parseInt(queryParams.filterLevelMin) || 0;
  const filterLevelMax = parseInt(queryParams.filterLevelMax) || 0;
  const filterCastingTime = queryParams.filterCastingTime || '';
  const filterTraits = queryParams.filterTraits ? queryParams.filterTraits.split(',') : [];
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 0;

  console.log(
    'Api Get Spells',
    `filterName: ${filterName},`,
    `filterLevelMin: ${filterLevelMin},`,
    `filterLevelMax: ${filterLevelMax},`,
    `filterCastingTime: ${filterCastingTime},`,
    `filterTraits: ${filterTraits},`,
    `sortOrder: ${sortOrder},`,
    `pageNumber: ${pageNumber},`,
    `pageSize: ${pageSize},`
  );

  Spell.find({})
    .populate('traits')
    .populate('affliction')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(result.map(mapDBToFE));
    });
};

exports.spell_get_single = (req, res, next) => {
  const queryParams = req.query;

  const spellId = queryParams.spellId || '';

  console.log('Api Get Single Spell', `spellId: ${spellId}`);

  Spell.findById(spellId)
    .populate('traits')
    .populate('affliction')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(mapDBToFE(result));
    });
};

function mapDBToFE(spell) {
  return {
    id: spell._id,
    name: spell.spell_name,
    traits: spell.traits
      ? spell.traits.map(trait => {
          return {
            id: trait._id,
            name: trait.trait_name,
            type: trait.types
          };
        })
      : undefined,
    description: spell.description,
    shortDesc: spell.short_description,
    successText: spell.successText,
    critSuccessText: spell.critSuccessText,
    failText: spell.failText,
    critFailText: spell.critFailText,
    level: spell.level,
    traditions: spell.traditions,
    castingTime: spell.casting_time,
    components: spell.component,
    cost: spell.cost,
    requirements: spell.requirements,
    trigger: spell.trigger,
    range: spell.range,
    targets: spell.targets,
    duration: spell.duration,
    area: spell.area,
    savingThrow: spell.saving_throw,
    heightened: spell.heightened
      ? spell.heightened.map(heightened => {
          return {
            triggerLevel: heightened.trigger_level,
            description: heightened.description
          };
        })
      : undefined,
    affliction: spell.affliction
      ? {
          name: spell.affliction.affliction_name,
          level: spell.affliction.level,
          type: spell.affliction.type,
          onset: spell.affliction.onset,
          ruletext: spell.affliction.rule_text,
          stages: spell.affliction.stages
        }
      : undefined
  };
}
