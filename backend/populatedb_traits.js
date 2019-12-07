#! /usr/bin/env node

console.log('This script populates some test traits to your database.');

// Get arguments passed on command line
const async = require('async');
const Trait = require('./model/Trait');

const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://pathfinder2_backend:pathF1nd3r2@cluster0-nfbij.mongodb.net/pathfinder2_toolkit?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
  () => {
    console.log('Database connected successfully');
  },
  error => {
    console.error(`Could not connected to database: ${error}`);
  }
);

let traits = [];

function traitCreate(name, types, cb) {
  let traitDetail = {
    trait_name: name,
    types: types
  };

  const trait = new Trait(traitDetail);

  trait.save(err => {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Trait: ', trait);
    traits.push(trait);
    cb(null, trait);
  });
}

async.series(
  [
    // Untyped Traits
    function(callback) {
      traitCreate('Additive', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Alchemical', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Archetype', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Attack', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Auditory', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Aura', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Cantrip', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Charm', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Companion', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Complex', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Composition', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Concentrate', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Contact', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Curse', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Darkness', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Death', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Dedication', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Detection', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Disease', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Downtime', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Drug', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Emotion', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Environmental', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Exploration', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Extradimensional', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Fear', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Flourish', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Focused', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Fortune', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('General', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Haunt', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Healing', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Incapacitation', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Incorporeal', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Infused', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Instinct', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Light', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Linguistic', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Litany', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Magical', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Manipulate', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Mechanical', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Mental', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Metamagic', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Minion', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Misfortune', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Morph', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Move', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Multiclass', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Oath', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Open', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Polymorph', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Possession', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Precious', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Prediction', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Press', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Rage', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Reload', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Revelation', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Saggorak', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Scrying', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Secret', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Shadow', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Skill', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Sleep', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Splash', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Stance', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Summoned', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Tattoo', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Telepathy', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Teleportation', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Trap', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Virulent', ['UNTYPED'], callback);
    },
    function(callback) {
      traitCreate('Visual', ['UNTYPED'], callback);
    },
    // Alignment Traits
    function(callback) {
      traitCreate('Chaotic', ['ALIGNMENT'], callback);
    },
    function(callback) {
      traitCreate('Evil', ['ALIGNMENT'], callback);
    },
    function(callback) {
      traitCreate('Good', ['ALIGNMENT'], callback);
    },
    function(callback) {
      traitCreate('Lawful', ['ALIGNMENT'], callback);
    },
    // Ancestry Traits
    function(callback) {
      traitCreate('Dwarf', ['ANCESTRY', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Elf', ['ANCESTRY', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Gnome', ['ANCESTRY', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Goblin', ['ANCESTRY', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Half-Elf', ['ANCESTRY'], callback);
    },
    function(callback) {
      traitCreate('Halfling', ['ANCESTRY', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Half-Orc', ['ANCESTRY'], callback);
    },
    function(callback) {
      traitCreate('Hobgoblin', ['ANCESTRY'], callback);
    },
    function(callback) {
      traitCreate('Human', ['ANCESTRY'], callback);
    },
    function(callback) {
      traitCreate('Leshy', ['ANCESTRY', 'MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Lizardfolk', ['ANCESTRY', 'MONSTER'], callback);
    },
    // Armor Traits
    function(callback) {
      traitCreate('Bulwark', ['ARMOR'], callback);
    },
    function(callback) {
      traitCreate('Comfort', ['ARMOR'], callback);
    },
    function(callback) {
      traitCreate('Flexible', ['ARMOR'], callback);
    },
    function(callback) {
      traitCreate('Noisy', ['ARMOR'], callback);
    },
    // Class Traits
    function(callback) {
      traitCreate('Alchemist', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Barbarian', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Bard', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Champion', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Cleric', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Druid', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Fighter', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Monk', ['CLASS', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Ranger', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Rogue', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Sorcerer', ['CLASS'], callback);
    },
    function(callback) {
      traitCreate('Wizard', ['CLASS'], callback);
    },
    // Creature Type Traits
    function(callback) {
      traitCreate('Aberration', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Animal', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Astral', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Beast', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Celestial', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Construct', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Dragon', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Elemental', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Ethereal', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Fey', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Fiend', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Fungus', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Giant', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Humanoid', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Monitor', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Ooze', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Plant', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Spirit', ['CREATURE_TYPE'], callback);
    },
    function(callback) {
      traitCreate('Undead', ['CREATURE_TYPE'], callback);
    },
    // Elemental Traits
    function(callback) {
      traitCreate('Air', ['ELEMENTAL'], callback);
    },
    function(callback) {
      traitCreate('Earth', ['ELEMENTAL'], callback);
    },
    function(callback) {
      traitCreate('Fire', ['ELEMENTAL', 'ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Water', ['ELEMENTAL'], callback);
    },
    // Energy Traits
    function(callback) {
      traitCreate('Acid', ['ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Cold', ['ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Electricity', ['ENERGY'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Fire', ['ENERGY'], callback);
    // },
    function(callback) {
      traitCreate('Force', ['ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Negative', ['ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Positive', ['ENERGY'], callback);
    },
    function(callback) {
      traitCreate('Sonic', ['ENERGY'], callback);
    },
    // Equipment Traits
    function(callback) {
      traitCreate('Apex', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Artifact', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Bomb', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Consumable', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Elixir', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Invested', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Mutagen', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Oil', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Potion', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Scroll', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Snare', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Staff', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Structure', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Talisman', ['EQUIPMENT'], callback);
    },
    function(callback) {
      traitCreate('Wand', ['EQUIPMENT'], callback);
    },
    // Monster Traits
    function(callback) {
      traitCreate('Aasimar', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Aeon', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Amphibious', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Anadi', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Angel', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Aquatic', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Archon', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Azata', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Boggard', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Brutal', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Caligni', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Catfolk', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Changeling', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Charua-Ka', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Daemon', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Demon', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Dero', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Devil', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Dhampir', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Dinosaur', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Drow', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Duergar', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Duskwalker', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Genie', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Ghost', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Ghoul', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Gnoll', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Golem', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Gremlin', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Grippli', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Hag', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Inevitable', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Kobold', ['MONSTER'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Leshy', ['MONSTER'], callback);
    // },
    // Already Added
    // function(callback) {
    //   traitCreate('Lizardfolk', ['MONSTER'], callback);
    // },
    function(callback) {
      traitCreate('Merfolk', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Mindless', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Mummy', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Mutant', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Nymph', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Olfactory', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Orc', ['MONSTER', 'WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Protean', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Psychopomp', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Rakshasa', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Ratfolk', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Sea Devil', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Skeleton', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Soulbound', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Sprite', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Swarm', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Tengu', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Tiefling', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Troll', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Vampire', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Velstrac', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Werecreature', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Wight', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Wraith', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Xulpath', ['MONSTER'], callback);
    },
    function(callback) {
      traitCreate('Zombie', ['MONSTER'], callback);
    },
    // Poison Traits
    function(callback) {
      traitCreate('Ingested', ['POISON'], callback);
    },
    function(callback) {
      traitCreate('Inhaled', ['POISON'], callback);
    },
    function(callback) {
      traitCreate('Injury', ['POISON'], callback);
    },
    function(callback) {
      traitCreate('Poison', ['POISON'], callback);
    },
    // Rarity Traits
    function(callback) {
      traitCreate('Common', ['RARITY'], callback);
    },
    function(callback) {
      traitCreate('Rare', ['RARITY'], callback);
    },
    function(callback) {
      traitCreate('Uncommon', ['RARITY'], callback);
    },
    function(callback) {
      traitCreate('Unique', ['RARITY'], callback);
    },
    // School Traits
    function(callback) {
      traitCreate('Abjuration', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Conjuration', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Divination', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Enchantment', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Evocation', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Illusion', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Necromancy', ['SCHOOL'], callback);
    },
    function(callback) {
      traitCreate('Transmutation', ['SCHOOL'], callback);
    },
    // Tradition Traits
    function(callback) {
      traitCreate('Arcane', ['TRADITION'], callback);
    },
    function(callback) {
      traitCreate('Divine', ['TRADITION'], callback);
    },
    function(callback) {
      traitCreate('Occult', ['TRADITION'], callback);
    },
    function(callback) {
      traitCreate('Primal', ['TRADITION'], callback);
    },
    // Weapon Traits
    function(callback) {
      traitCreate('Agile', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Attached', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Backstabber', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Backswing', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Deadly', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Disarm', ['WEAPON'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Dwarf', ['WEAPON'], callback);
    // },
    // Already Added
    // function(callback) {
    //   traitCreate('Elf', ['WEAPON'], callback);
    // },
    function(callback) {
      traitCreate('Fatal', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Finesse', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Forceful', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Free-Hand', ['WEAPON'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Gnome', ['WEAPON'], callback);
    // },
    // Already Added
    // function(callback) {
    //   traitCreate('Goblin', ['WEAPON'], callback);
    // },
    function(callback) {
      traitCreate('Grapple', ['WEAPON'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Halfling', ['WEAPON'], callback);
    // },
    function(callback) {
      traitCreate('Jousting', ['WEAPON'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Monk', ['WEAPON'], callback);
    // },
    function(callback) {
      traitCreate('Nonlethal', ['WEAPON'], callback);
    },
    // Already Added
    // function(callback) {
    //   traitCreate('Orc', ['WEAPON'], callback);
    // },
    function(callback) {
      traitCreate('Parry', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Propulsive', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Range', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Ranged Trip', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Reach', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Shove', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Sweep', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Tethered', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Thrown', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Trip', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Twin', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Two-Hand', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Unarmed', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Versatile', ['WEAPON'], callback);
    },
    function(callback) {
      traitCreate('Volley', ['WEAPON'], callback);
    }
  ],
  // Optional callback
  function(err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    } else {
      console.log('TRAITS Results: ', results);
    }

    // All done, disconnect from database
    mongoose.connection.close();
  }
);
