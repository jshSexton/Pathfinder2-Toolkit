import { Injectable } from '@angular/core';
import { Feat, FeatureTypes, StandardActionTypes, Trait } from '@app/shared/app-interfaces-enums';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  constructor() {}
  createDb() {
    const traits: Array<Trait> = [
      {
        id: 1,
        name: 'DWARF_TRAIT',
        displayText: 'Dwarf'
      },
      {
        id: 2,
        name: 'ELF_TRAIT',
        displayText: 'Elf'
      },
      {
        id: 3,
        name: 'GNOME_TRAIT',
        displayText: 'Gnome'
      },
      {
        id: 4,
        name: 'GOBLIN_TRAIT',
        displayText: 'Goblin'
      },
      {
        id: 5,
        name: 'HALFLING_TRAIT',
        displayText: 'Halfling'
      },
      {
        id: 6,
        name: 'HUMAN_TRAIT',
        displayText: 'Human'
      },
      {
        id: 7,
        name: 'HALFELF_TRAIT',
        displayText: 'Half Elf'
      },
      {
        id: 8,
        name: 'ORC_TRAIT',
        displayText: 'Orc'
      },
      {
        id: 9,
        name: 'HALFORC_TRAIT',
        displayText: 'Half Orc'
      },
      {
        id: 10,
        name: 'ALCHEMIST_TRAIT',
        displayText: 'Alchemist'
      },
      {
        id: 11,
        name: 'BARBARIAN_TRAIT',
        displayText: 'Barbarian'
      },
      {
        id: 12,
        name: 'BARD_TRAIT',
        displayText: 'Bard'
      },
      {
        id: 13,
        name: 'CLERIC_TRAIT',
        displayText: 'Cleric'
      },
      {
        id: 14,
        name: 'DRUID_TRAIT',
        displayText: 'Druid'
      },
      {
        id: 15,
        name: 'FIGHTER_TRAIT',
        displayText: 'Fighter'
      },
      {
        id: 16,
        name: 'MONK_TRAIT',
        displayText: 'Monk'
      },
      {
        id: 17,
        name: 'PALADIN_TRAIT',
        displayText: 'Paladin'
      },
      {
        id: 18,
        name: 'RANGER_TRAIT',
        displayText: 'Ranger'
      },
      {
        id: 19,
        name: 'ROGUE_TRAIT',
        displayText: 'Rogue'
      },
      {
        id: 20,
        name: 'SORCERER_TRAIT',
        displayText: 'Sorcerer'
      },
      {
        id: 21,
        name: 'WIZARD_TRAIT',
        displayText: 'Wizard'
      },
      {
        id: 22,
        name: 'HERITAGE_TRAIT',
        displayText: 'Heritage'
      },
      {
        id: 23,
        name: 'GENERAL_TRAIT',
        displayText: 'General'
      },
      {
        id: 24,
        name: 'SKILL_TRAIT',
        displayText: 'Skill'
      },
      {
        id: 25,
        name: 'DOWNTIME_TRAIT',
        displayText: 'Downtime'
      },
      {
        id: 26,
        name: 'SECRET_TRAIT',
        displayText: 'Secret'
      },
      {
        id: 27,
        name: 'MOVE_TRAIT',
        displayText: 'Move'
      },
      {
        id: 28,
        name: 'ATTACK_TRAIT',
        displayText: 'Attack'
      },
      {
        id: 29,
        name: 'VISUAL_TRAIT',
        displayText: 'Visual'
      },
      {
        id: 30,
        name: 'MANIPULATE_TRAIT',
        displayText: 'Manipulate'
      },
      {
        id: 31,
        name: 'DEATH_TRAIT',
        displayText: 'Death'
      },
      {
        id: 32,
        name: 'EMOTION_TRAIT',
        displayText: 'Emotion'
      },
      {
        id: 33,
        name: 'FEAR_TRAIT',
        displayText: 'Fear'
      },
      {
        id: 34,
        name: 'HEALING_TRAIT',
        displayText: 'Healing'
      },
      {
        id: 35,
        name: 'CONCENTRATE_TRAIT',
        displayText: 'Concentrate'
      },
      {
        id: 36,
        name: 'ADDITIVE_TRAIT',
        displayText: 'Additive'
      },
      {
        id: 37,
        name: 'MENTAL_TRAIT',
        displayText: 'Mental'
      },
      {
        id: 38,
        name: 'RAGE_TRAIT',
        displayText: 'Rage'
      },
      {
        id: 39,
        name: 'MORPH_TRAIT',
        displayText: 'Morph'
      },
      {
        id: 40,
        name: 'PRIMAL_TRAIT',
        displayText: 'Primal'
      },
      {
        id: 41,
        name: 'TOTEM_TRAIT',
        displayText: 'Totem'
      },
      {
        id: 42,
        name: 'TRANSMUTATION_TRAIT',
        displayText: 'Transmutation'
      },
      {
        id: 43,
        name: 'ARCANE_TRAIT',
        displayText: 'Arcane'
      },
      {
        id: 44,
        name: 'EVOCATION_TRAIT',
        displayText: 'Evocation'
      },
      {
        id: 45,
        name: 'POLYMORPH_TRAIT',
        displayText: 'Polymorph'
      },
      {
        id: 46,
        name: 'DIVINE_TRAIT',
        displayText: 'Divine'
      },
      {
        id: 47,
        name: 'NECROMANCY_TRAIT',
        displayText: 'Necromancy'
      },
      {
        id: 48,
        name: 'AUDITORY_TRAIT',
        displayText: 'Auditory'
      },
      {
        id: 49,
        name: 'FORTUNE_TRAIT',
        displayText: 'Fortune'
      },
      {
        id: 50,
        name: 'METAMAGIC_TRAIT',
        displayText: 'Metamagic'
      },
      {
        id: 51,
        name: 'POSITIVE_TRAIT',
        displayText: 'Positive'
      },
      {
        id: 52,
        name: 'NEGATIVE_TRAIT',
        displayText: 'Negative'
      },
      {
        id: 53,
        name: 'GOOD_TRAIT',
        displayText: 'Good'
      },
      {
        id: 54,
        name: 'EVIL_TRAIT',
        displayText: 'Evil'
      },
      {
        id: 55,
        name: 'ANIMALORDER_TRAIT',
        displayText: 'Animal Order'
      }
    ];
    const feats: Array<Feat> = [
      {
        id: 1,
        name: 'Far Lobber',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[10]],
        actions: StandardActionTypes.NO_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'You’ve learned techniques to improve your distance throwing. When ' +
          'you throw an alchemical bomb, it has a range increment of 30 feet instead of the usual 20 feet.',
        special: ''
      } as Feat,
      {
        id: 2,
        name: 'Alertness',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23]],
        actions: StandardActionTypes.NO_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description: 'You remain alert to threats around you. You gain expert proficiency in Perception.',
        shortDesc: 'Gain Expert Perception',
        special: ''
      } as Feat,
      {
        id: 3,
        name: 'Battle Medic',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23], traits[34], traits[30], traits[24]],
        actions: StandardActionTypes.SINGLE_ACTION,
        levelRequirement: 1,
        prerequisites: 'trained in Medicine',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'You can patch up yourself or an adjacent ally, even if you’re in the middle of combat.' +
          'In order to do so, you must attempt a DC 20 Medicine check.' +
          'Regardless of your result, the target is bolstered to your use of Battle Medic.\n' +
          'If you’re a master of Medicine, ' +
          'you can instead attempt a DC 25 check to increase the Hit Points regained by 2d10, and ' +
          'if you’re legendary, you can instead attempt a DC 30 check to increase the Hit Points regained by 4d10.\n' +
          'Success The target regains Hit Points equal to 1d10 plus your Wisdom modifier.\n' +
          'Critical Success As success, but target regains 1d10 additional HP.\n' +
          'Critical Failure The target takes 1d10 damage.',
        shortDesc: 'Use medicine in battle.',
        special: ''
      } as Feat,
      {
        id: 4,
        name: 'Armor Proficiency',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23]],
        actions: StandardActionTypes.NO_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'You become trained in light armor. If you already were trained in light armor, ' +
          'you gain training in medium armor, and if you were trained in both, you become trained in heavy armor.',
        shortDesc: 'Gain Armor Training',
        special:
          'You can select this feat more than once. ' +
          'Each time you select this feat, you become trained in the next type of ' +
          'armor as appropriate (first light armor, then medium armor, then heavy armor).'
      } as Feat,
      {
        id: 5,
        name: "Ancient's Blood",
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[1], traits[22]],
        actions: StandardActionTypes.REACTION_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: 'You attempt a saving throw against a magical effect.',
        requirements: '',
        description:
          'Your ancestors’ innate resistance to magic has manifested in you. ' +
          'You gain a +2 circumstance bonus to the triggering saving throw.',
        special:
          'Your resistance hampers your connection to magic items. ' +
          'Reduce your total Resonance Points by 2 (minimum 0). ' +
          'For more information about Resonance Points, see page 376.'
      } as Feat,
      {
        id: 6,
        name: 'Counterspell',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[20]],
        actions: StandardActionTypes.REACTION_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: 'A creature casts a spell that you have in your repertoire.',
        requirements: 'You must have an unexpended spell slot of the triggering spell’s level.',
        description:
          'You expend one of your spell slots to counter the triggering creature’s casting of a spell ' +
          'that you have in your repertoire. You lose your spell slot as if you had cast the triggering ' +
          'spell. You then attempt to dispel the triggering spell (see Dispelling on page 197).',
        special:
          'This feat has the trait corresponding to the type of spells you cast ' +
          '(arcane, divine, natural, or occult).'
      } as Feat,
      {
        id: 7,
        name: 'Kip Up',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23], traits[27]],
        actions: StandardActionTypes.FREE_ACTION,
        levelRequirement: 7,
        prerequisites: 'master in Acrobatics',
        frequency: '',
        cost: '',
        trigger: 'Your turn begins and you are prone.',
        requirements: '',
        description: 'You stand back up. This movement doesn’t trigger reactions.',
        shortDesc: 'Stand up with no reactions.',
        special: ''
      } as Feat,
      {
        id: 8,
        name: 'Debilitating Bomb',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[36], traits[10]],
        actions: StandardActionTypes.FREE_ACTION,
        levelRequirement: 6,
        prerequisites: '',
        frequency: 'once per round',
        cost: '',
        trigger: 'You craft an alchemical item that has the elixir trait using the Quick Alchemy action.',
        requirements: '',
        description:
          'You mix a substance into the bomb that can cause one of the ' +
          'following conditions: dazzled, deafened, flat-footed, or hampered ' +
          '5. If the attack with that bomb hits, the target must succeed at ' +
          'a Fortitude saving throw or gain that condition until the start of ' +
          'your next turn. Use your class DC for this saving throw (even if someone else throws the bomb).',
        special: ''
      } as Feat,
      {
        id: 9,
        name: 'Legendary Impersonator',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23], traits[24]],
        actions: StandardActionTypes.TRIPLE_ACTION,
        levelRequirement: 15,
        prerequisites: 'legendary in Deception, Quick Disguise',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description: 'You set up a full disguise with which you can Impersonate someone with incredible speed.',
        special: ''
      } as Feat,
      {
        id: 10,
        name: 'Boulder Roll',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[1]],
        actions: StandardActionTypes.DOUBLE_ACTION,
        levelRequirement: 5,
        prerequisites: 'Mountain Roots',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'Your dwarven build allows you to push foes around. Take a Step ' +
          'into the square of a foe that is your size or smaller, and the foe ' +
          'must move into the empty space directly behind it. The foe must ' +
          'move even if doing so places it in harm’s way. The foe can attempt ' +
          'to block your Step by rolling a Fortitude saving throw against your ' +
          'Athletics DC. If the foe attempts this saving throw, regardless of ' +
          'the saving throw’s result, ' +
          'the creature takes bludgeoning damage equal to your level plus your Strength modifier.\n' +
          'If the foe can’t move into an empty space (if it is surrounded ' +
          'by solid objects or other creatures, for example), your Boulder Roll has no effect.',
        special: ''
      } as Feat,
      {
        id: 11,
        name: 'Recognize Spell',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[23], traits[26], traits[24]],
        actions: StandardActionTypes.REACTION_ACTION,
        levelRequirement: 1,
        prerequisites: 'trained in Arcana, Nature, Occultism, or Religion',
        frequency: '',
        cost: '',
        trigger:
          'A creature casts a spell within line of sight of you, ' +
          'or a trap or similar inanimate object triggers and ' +
          'casts a spell. You must be aware the creature is casting a spell or the trap is triggering.',
        requirements: '',
        description:
          'The GM rolls a secret Arcana, Nature, Occultism, or Religion ' +
          'check, whichever corresponds to the tradition of the spell being' +
          'cast. If you’re not trained in the skill, you can’t get a result ' +
          'better than failure. The DC of the check is 10 plus triple the ' +
          'level of the spell. The DC for an uncommon spell is usually 2 higher, and 5 higher for a rare spell.\n' +
          'Success You correctly recognize the spell.\n' +
          'Critical Success You correctly recognize the spell and get a ' +
          '+1 circumstance bonus to your saving throw or your AC to ' +
          'defend against it (if applicable).\n' +
          'Failure You fail to recognize the spell.\n' +
          'Critical Failure You misidentify the spell as another spell entirely, of the GM’s choice.',
        special: ''
      } as Feat,
      {
        id: 12,
        name: 'Improved Combat Grab',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[15]],
        actions: StandardActionTypes.NO_ACTION,
        levelRequirement: 2,
        prerequisites: 'Combat Grab',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'Your grab roots an enemy in place. When you use Combat Grab, you can gain the ' +
          'following enhancement instead of its normal enhancement.\n' +
          'Enhancement Until the end of your next turn, your opponent is grabbed and must break ' +
          'free with the Break Grapple action if it wants to move away. Even if it successfully ' +
          'breaks the grapple, it remains flat-footed until it is out of your melee reach.',
        special: ''
      } as Feat,
      {
        id: 13,
        name: 'Scare to Death',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[31], traits[33], traits[23], traits[24]],
        actions: StandardActionTypes.SINGLE_ACTION,
        levelRequirement: 15,
        prerequisites: 'legendary in Intimidation',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'Attempt an Intimidation check against the ' +
          'Will DC of a living creature within 30 feet of you that ' +
          'you sense or see and who can sense or see you. If the target does not understand the language you ' +
          'are speaking, or it can’t hear you, you take a –4 circumstance penalty to the check. ' +
          'A creature subjected to this action' +
          'becomes bolstered against all Scare to Death actions.\n',
        critSuccessText: 'The target must succeed at a Fortitude save against your Intimidation DC or die.',
        successText: 'The target becomes frightened 2 and is fleeing for 1 round.',
        failText: 'The target is frightened 1.',
        critFailText: 'The target is unaffected.',
        special: ''
      } as Feat,
      {
        id: 14,
        name: 'Sudden Charge',
        type: FeatureTypes.FEAT_TYPE,
        traits: [traits[28], traits[15], traits[27]],
        actions: StandardActionTypes.DOUBLE_ACTION,
        levelRequirement: 1,
        prerequisites: '',
        frequency: '',
        cost: '',
        trigger: '',
        requirements: '',
        description:
          'With a quick sprint, you dash up to your foe and swing. Stride up to double ' +
          'your Speed. If you end the move within melee reach of at least one enemy, ' +
          'you can make a melee Strike against that enemy. You can use Sudden ' +
          'Charge while Burrowing, Climbing, Flying, or Swimming ' +
          'instead of Striding if you have the corresponding movement type.',
        special: ''
      } as Feat
    ];

    return { traits, feats };
  }
}
