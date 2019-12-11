#! /usr/bin/env node

console.log('This script populates or updates some test spells to your database.');

// Get arguments passed on command line
const async = require('async');
const Spell = require('./models/Spell');
const Trait = require('./models/Trait');
const Affliction = require('./models/Affliction');

const fs = require('fs');
const spellsFromJson = JSON.parse(fs.readFileSync('temp-data/spellslist.json', 'utf8'));

const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://pathfinder2_backend:pathF1nd3r2@cluster0-nfbij.mongodb.net/pathfinder2_toolkit?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
  () => {
    console.log('________Database connected successfully________');
    addSpellsToDB();
  },
  error => {
    console.error(`Could not connected to database: ${error}`);
  }
);

function spellCreate(spellData, cb) {
  if (!spellData.traits) {
    spellData.traits = [];
  }

  let getTraitIdFunctions = spellData.traits.map(trait => {
    return callback => {
      Trait.find({ trait_name: trait })
        .lean()
        .exec((error, data) => {
          if (error) {
            console.error('GET_TRAIT_ID_ERROR: ', error, `Find trait: ${trait}`);
          } else if (data.length === 0) {
            console.error('FAILED_TO_FIND_ID', `Find trait: ${trait}`);
            callback('FAILED_TO_FIND_ID', null);
          } else {
            callback(null, data[0]);
          }
        });
    };
  });

  let trait_ids = [];
  async.parallel(getTraitIdFunctions, (error, results) => {
    if (error) {
      cb(`TRAIT_ID_ERROR: Name-${spellData.spell_name}`, null);
      return;
    }

    trait_ids = results.map(res => {
      return res._id;
    });
    spellData.traits = trait_ids;

    if (spellData.affliction) {
      // Create and Save affliction
      Affliction.findOneAndUpdate(
        { affliction_name: spellData.affliction.affliction_name },
        spellData.affliction,
        { upsert: true, new: true },
        (err, afflictionResult) => {
          if (err) {
            cb(err, null);
            return;
          }
          console.log('-------------------');
          console.log('New Affliction: ', afflictionResult);
          spellData.affliction = afflictionResult.id;
          spellCreateSaveToDB(spellData, cb);
        }
      );
    } else {
      spellCreateSaveToDB(spellData, cb);
    }
  });
}

function spellCreateSaveToDB(spellData, cb) {
  Spell.findOneAndUpdate(
    { spell_name: spellData.spell_name },
    spellData,
    { upsert: true, new: true },
    (err, spellResult) => {
      if (err) {
        cb(err, null);
        return;
      }
      console.log('*****************************');
      console.log('New Spell: ', spellResult);
      cb(null, spellResult);
    }
  );
}

function addSpellsToDB() {
  let spellSaveFunctions = spellsFromJson.map(spell => {
    return callback => {
      spellCreate(spell, callback);
    };
  });

  async.series(
    spellSaveFunctions,
    // Optional callback
    function(err, results) {
      if (err) {
        console.error('FINAL ERR: ' + err);
      } else {
        console.log('------------------------------**********************------------------------------');
        console.log('SPELLS Results: ', results);
      }

      // All done, disconnect from database
      mongoose.connection.close();
      console.log('________Database disconnected successfully________');
    }
  );
}
