#! /usr/bin/env node

console.log('This script populates or updates some test feats to your database.');

// Get arguments passed on command line
const async = require('async');
const Feat = require('./models/Feat');
const Trait = require('./models/Trait');
const Affliction = require('./models/Affliction');

const fs = require('fs');
const featsFromJson = JSON.parse(fs.readFileSync('temp-data/featslist.json', 'utf8'));

const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://pathfinder2_backend:pathF1nd3r2@cluster0-nfbij.mongodb.net/pathfinder2_toolkit?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
  () => {
    console.log('________Database connected successfully________');
    addFeatsToDB();
  },
  error => {
    console.error(`Could not connected to database: ${error}`);
  }
);

function featCreate(featData, cb) {
  if (!featData.traits) {
    featData.traits = [];
  }

  let getTraitIdFunctions = featData.traits.map(trait => {
    return callback => {
      Trait.find({ trait_name: trait })
        .lean()
        .exec((error, data) => {
          if (error) {
            console.error('GET_TRAIT_ID_ERROR: ', error, `Find trait: ${trait}`);
          } else if (data.length === 0) {
            console.error('FAILED_TO_FIND_ID');
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
      cb(`TRAIT_ID_ERROR: Name-${featData.feat_name}`, null);
      return;
    }

    trait_ids = results.map(res => {
      return res._id;
    });
    featData.traits = trait_ids;

    if (featData.affliction) {
      // Create and Save affliction
      Affliction.findOneAndUpdate(
        { affliction_name: featData.affliction.affliction_name },
        featData.affliction,
        { upsert: true, new: true },
        (err, afflictionResult) => {
          if (err) {
            cb(err, null);
            return;
          }
          console.log('-------------------');
          console.log('New Affliction: ', afflictionResult);
          featData.affliction = afflictionResult.id;
          featCreateSaveToDB(featData, cb);
        }
      );
    } else {
      featCreateSaveToDB(featData, cb);
    }
  });
}

function featCreateSaveToDB(featData, cb) {
  Feat.findOneAndUpdate({ feat_name: featData.feat_name }, featData, { upsert: true, new: true }, (err, featResult) => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('*****************************');
    console.log('New Feat: ', featResult);
    cb(null, featResult);
  });
}

function addFeatsToDB() {
  let featSaveFunctions = featsFromJson.map(feat => {
    return callback => {
      featCreate(feat, callback);
    };
  });

  async.series(
    featSaveFunctions,
    // Optional callback
    function(err, results) {
      if (err) {
        console.error('FINAL ERR: ' + err);
      } else {
        console.log('------------------------------**********************------------------------------');
        console.log('FEATS Results: ', results);
      }

      // All done, disconnect from database
      mongoose.connection.close();
      console.log('________Database disconnected successfully________');
    }
  );
}
