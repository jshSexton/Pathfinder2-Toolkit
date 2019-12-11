require('../models/Trait');
require('../models/Affliction');

const Spell = require('../models/Spell');

// Get all Spells
exports.spell_list = (req, res, next) => {
  const queryParams = req.query;

  const spellId = queryParams.spellId || '';
  const filter = queryParams.filter || '';
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = parseInt(queryParams.pageNumber) || 0;
  const pageSize = parseInt(queryParams.pageSize) || 0;

  console.log('Api Get Spells', spellId, filter, sortOrder, pageNumber, pageSize);

  Spell.find({})
    .populate('traits')
    .populate('affliction')
    .lean()
    .exec((error, result) => {
      if (error) {
        return next(error);
      }
      // Remap db fields to fields front-end expects
      res.json(
        result.map(spell => {
          return {
            id: spell._id,
            name: spell.spell_name,
            traits: spell.traits.map(trait => {
              return {
                id: trait._id,
                name: trait.trait_name,
                type: trait.types
              };
            }),
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
            heightened: spell.heightened.map(heightened => {
              return {
                triggerLevel: heightened.trigger_level,
                description: heightened.description
              };
            }),
            affliction: {
              name: spell.affliction ? spell.affliction.affliction_name : null,
              level: spell.affliction ? spell.affliction.level : null,
              type: spell.affliction ? spell.affliction.type : null,
              onset: spell.affliction ? spell.affliction.onset : null,
              ruletext: spell.affliction ? spell.affliction.rule_text : null,
              stages: spell.affliction ? spell.affliction.stages : null
            }
          };
        })
      );
    });
};
