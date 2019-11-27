import { Injectable } from '@angular/core';
import {
  Affliction,
  Feat,
  FeatureTypes,
  SavingThrowTypes,
  Spell,
  SpellComponents,
  SpellTraditions,
  StandardActionTypes,
  Trait
} from '@app/shared/app-interfaces-enums';

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
      },
      {
        id: 56,
        name: 'CHAOTIC_TRAIT',
        displayText: 'Chaotic'
      },
      {
        id: 57,
        name: 'DISEASE_TRAIT',
        displayText: 'Disease'
      },
      {
        id: 58,
        name: 'ACID_TRAIT',
        displayText: 'Acid'
      },
      {
        id: 59,
        name: 'CANTRIP_TRAIT',
        displayText: 'Cantrip'
      },
      {
        id: 60,
        name: 'AIR_TRAIT',
        displayText: 'Air'
      },
      {
        id: 61,
        name: 'CONJURATION_TRAIT',
        displayText: 'Conjuration'
      },
      {
        id: 62,
        name: 'ABJURATION_TRAIT',
        displayText: 'Abjuration'
      },
      {
        id: 63,
        name: 'DIVINATION_TRAIT',
        displayText: 'Divination'
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
    const spells: Array<Spell> = [
      {
        id: 1,
        name: 'Abyssal Plague',
        type: FeatureTypes.SPELL_TYPE,
        level: 5,
        traits: [traits[27], traits[55], traits[56], traits[53], traits[46]],
        traditions: [SpellTraditions.DIVINE, SpellTraditions.OCCULT],
        castingTime: StandardActionTypes.DOUBLE_ACTION,
        components: [SpellComponents.SOMATIC, SpellComponents.VERBAL],
        range: 'touch',
        targets: '1 creature',
        savingThrow: SavingThrowTypes.FORTITUDE_SAVE,
        shortDesc: 'Inflict a draining curse.',
        description:
          'Your touch afflicts the target with Abyssal plague, which ' +
          'siphons fragments of their soul away to empower the Abyss. ' +
          'The effect is based on the target’s Fortitude save.',
        critSuccessText: 'The target is unaffected',
        successText:
          'The target takes 2 evil damage per spell level, and ' +
          'takes a –2 status penalty to saves against Abyssal plague for ' +
          '1 day or until the target contracts it, whichever comes first.',
        failText: 'The target is afflicted with Abyssal plague at stage 1.',
        critFailText: 'The target is afflicted with Abyssal plague at stage 2.',
        affliction: {
          name: 'Abyssal Plague',
          type: 'disease',
          level: 9,
          ruleText:
            'The target can’t recover ' +
            'from the drained condition from Abyssal plague until the ' +
            'disease is cured.',
          stages: [
            {
              level: 1,
              effect: 'drained 1',
              duration: '(1 day)'
            },
            {
              level: 2,
              effect: 'drained increases by 2',
              duration: '(1 day)'
            }
          ]
        } as Affliction
      } as Spell,
      {
        id: 2,
        name: 'Acid Arrow',
        type: FeatureTypes.SPELL_TYPE,
        level: 2,
        traits: [traits[57], traits[27], traits[43]],
        traditions: [SpellTraditions.ARCANE, SpellTraditions.PRIMAL],
        castingTime: StandardActionTypes.DOUBLE_ACTION,
        components: [SpellComponents.SOMATIC, SpellComponents.VERBAL],
        range: '120 feet',
        targets: '1 creature or object',
        shortDesc: 'Magical arrow deals acid damage persistently.',
        description:
          'You conjure an arrow of acid that continues corroding the ' +
          'target after it hits. Make a spell attack against the target. ' +
          'On a hit, you deal 3d8 acid damage plus 1d6 persistent acid ' +
          'damage. On a critical hit, double the initial damage, but not the ' +
          'persistent damage.',
        heightened: [
          {
            triggerLevel: '+2',
            description: 'The initial damage increases by 2d8, and the ' + 'persistent acid damage increases by 1d6.'
          }
        ]
      } as Spell,
      {
        id: 3,
        name: 'Acid Splash',
        type: FeatureTypes.SPELL_TYPE,
        level: 0,
        traits: [traits[57], traits[27], traits[58], traits[43]],
        traditions: [SpellTraditions.ARCANE, SpellTraditions.PRIMAL],
        castingTime: StandardActionTypes.DOUBLE_ACTION,
        components: [SpellComponents.SOMATIC, SpellComponents.VERBAL],
        range: '30 feet',
        targets: '1 creature or object',
        shortDesc: 'Damage creatures with acid.',
        description:
          'You splash a glob of acid that splatters creatures and objects ' +
          'alike. Make a spell attack. If you hit, you deal 1d6 acid damage ' +
          'plus 1 splash acid damage. On a critical success, the target also ' +
          'takes 1 persistent acid damage.',
        heightened: [
          {
            triggerLevel: '3rd',
            description:
              'The initial damage increases to 1d6 + your ' +
              'spellcasting ability modifier, and the persistent damage ' +
              'increases to 2.'
          },
          {
            triggerLevel: '5th',
            description:
              'The initial damage increases to 2d6 + your ' +
              'spellcasting ability modifier, the persistent damage increases ' +
              'to 3, and the splash damage increases to 2.'
          },
          {
            triggerLevel: '7th',
            description:
              'The initial damage increases to 3d6 + your ' +
              'spellcasting ability modifier, the persistent damage increases ' +
              'to 4, and the splash damage increases to 3.'
          },
          {
            triggerLevel: '9th',
            description:
              'The initial damage increases to 4d6 + your ' +
              'spellcasting ability modifier, the persistent damage increases ' +
              'to 5, and the splash damage increases to 4.'
          }
        ]
      } as Spell,
      {
        id: 4,
        name: 'Aerial Form',
        type: FeatureTypes.SPELL_TYPE,
        level: 4,
        traits: [traits[44], traits[41]],
        traditions: [SpellTraditions.PRIMAL, SpellTraditions.ARCANE],
        castingTime: StandardActionTypes.DOUBLE_ACTION,
        components: [SpellComponents.SOMATIC, SpellComponents.VERBAL],
        duration: '1 minute',
        shortDesc: 'Turn into a flying combatant',
        description:
          'You harness your mastery of primal forces to reshape your ' +
          'body into a Medium flying animal battle form. When you cast ' +
          'this spell, choose bat, bird, pterosaur, or wasp. You can decide ' +
          'the specific type of animal (such as an owl or eagle for bird), but ' +
          'this has no effect on the form’s Size or statistics. While in this ' +
          'form, you gain the animal trait. You can Dismiss the spell.\n' +
          'You gain the following statistics and abilities regardless of' +
          'which battle form you choose:\n' +
          '<ul>' +
          '<li>AC = 18 + your level. Ignore your armor’s check penalty and Speed reduction.</li>' +
          '<li>5 temporary Hit Points</li>' +
          '<li>Low-light vision</li>' +
          '<li>One or more unarmed melee attacks specific to the ' +
          'battle form you choose, which are the only attacks you ' +
          'can use. You’re trained with them. Your attack modifier ' +
          'is +16, and your damage bonus is +5. These attacks are ' +
          'Dexterity based (for the purpose of the clumsy condition, ' +
          'for example). If your attack modifier for Dexterity-based ' +
          'unarmed attacks is higher, you can use it instead.</li>' +
          '<li>Acrobatics modifier of +16, unless your own modifier is higher.</li>' +
          '</ul>' +
          'You also gain specific abililties based on the form you choose:' +
          '<ul>' +
          '<li>' +
          '<b>Bat</b> Speed 20 feet, fly Speed 30 feet; precise echolocation 40 feet;' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) fangs, <b>Damage</b> 2d8 piercing;' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) wing (agile), <b>Damage</b> 2d6 bludgeoning;' +
          '</li>' +
          '<li>' +
          '<b>Bird</b> Speed 10 feet, fly Speed 50 feet' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) beak, <b>Damage</b> 2d8 piercing;' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) talon (agile), <b>Damage</b> 1d10 slashing;' +
          '</li>' +
          '<li>' +
          '<b>Pterosaur</b> Speed 10 feet, fly Speed 40 feet; imprecise scent 30 feet;' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) beak, <b>Damage</b> 3d6 piercing;' +
          '</li>' +
          '<li>' +
          '<b>Wasp</b> Speed 20 feet, fly Speed 40 feet;' +
          '<b>Melee</b>(ICON-SINGLE-ACTION) stinger, <b>Damage</b> 1d8 piercing plus 1d6 persistent poison;' +
          '</li>' +
          '</ul>',
        heightened: [
          {
            triggerLevel: '5th',
            description:
              'Your battle form is Large and your fly ' +
              'Speed gains a +10-foot status bonus. You must have enough ' +
              'space to expand into or the spell is lost. You instead gain 10 ' +
              'temporary HP, attack modifier +18, damage bonus +8, and ' +
              'Acrobatics +20.'
          },
          {
            triggerLevel: '6th',
            description:
              'Your battle form is Huge, your fly Speed ' +
              'gains a +15-foot status bonus, and your attacks have 10-foot ' +
              'reach. You must have enough space to expand into or the spell ' +
              'is lost. You instead gain AC = 21 + your level, 15 temporary ' +
              'HP, attack modifier +21, damage bonus +4 and double damage ' +
              'dice (including persistent damage), and Acrobatics +23.'
          }
        ]
      } as Spell,
      {
        id: 5,
        name: 'Air Bubble',
        type: FeatureTypes.SPELL_TYPE,
        level: 1,
        traits: [traits[59], traits[60]],
        traditions: [SpellTraditions.ARCANE, SpellTraditions.DIVINE, SpellTraditions.PRIMAL],
        castingTime: StandardActionTypes.REACTION_ACTION,
        components: [SpellComponents.VERBAL],
        trigger: 'A creature within range enters an environment where it can’t breathe.',
        range: '60 feet',
        targets: 'the triggering creature',
        duration: '1 minute',
        shortDesc: 'React to create air for a creature to breathe.',
        description:
          'A bubble of pure air appears around the target’s head, allowing ' +
          'it to breathe normally. The effect ends as soon as the target ' +
          'returns to an environment where it can breathe normally.'
      } as Spell,
      {
        id: 6,
        name: 'Alarm',
        type: FeatureTypes.SPELL_TYPE,
        level: 1,
        traits: [traits[61]],
        traditions: [SpellTraditions.ARCANE, SpellTraditions.DIVINE, SpellTraditions.OCCULT, SpellTraditions.PRIMAL],
        castingTime: '10 minutes',
        components: [SpellComponents.MATERIAL, SpellComponents.SOMATIC, SpellComponents.VERBAL],
        requirements: '3 gp silver bell focus',
        range: 'touch',
        area: '20-foot burst',
        duration: '8 hours',
        shortDesc: 'Be alerted if a creature enters a warded area.',
        description:
          'You ward an area to alert you when creatures enter without your ' +
          'permission. When you cast alarm, select a password. Whenever ' +
          'a Small or larger corporeal creature enters the spell’s area without ' +
          'speaking the password, alarm sends your choice of a mental ' +
          'alert (in which case the spell gains the mental trait) or an audible ' +
          'alarm with the sound and volume of a hand bell (in which case ' +
          'the spell gains the auditory trait). Either option automatically ' +
          'awakens you, and the bell allows each creature in the area to ' +
          'attempt a DC 15 Perception check to wake up. A creature aware ' +
          'of the alarm must succeed at a Stealth check against the spell’s ' +
          'DC or trigger the spell when moving into the area.',
        heightened: [
          {
            triggerLevel: '3rd',
            description:
              'You can specify criteria for which creatures sound the alarm spell-for instance, ' +
              'orcs or masked people'
          }
        ]
      } as Spell,
      {
        id: 7,
        name: 'Alter Reality',
        type: FeatureTypes.SPELL_TYPE,
        level: 10,
        traits: [traits[62]],
        traditions: [SpellTraditions.OCCULT],
        castingTime: StandardActionTypes.TRIPLE_ACTION,
        components: [SpellComponents.MATERIAL, SpellComponents.SOMATIC, SpellComponents.VERBAL],
        shortDesc: '',
        description:
          'You use your occult lore and the power of your mind to manipulate ' +
          'the spiritual multiverse, resulting in any of the following effects:' +
          '<ul>' +
          '<li>Duplicate any occult spell of 9th level or lower.</li>' +
          '<li>Duplicate any non-occult spell of 7th level or lower.</li>' +
          '<li>Produce any effect whose power is equivalent to any occult spell 9th level or lower, ' +
          'or non-occult spell 7th level or lower.</li>' +
          '<li>Reverse certain effects that refer to the wish spell</li>' +
          '</ul>' +
          'At the GM’s discretion, you can try to produce greater effects, ' +
          'but this is dangerous and the spell may have only a partial effect.'
      } as Spell
    ];

    return { traits, feats };
  }
}
