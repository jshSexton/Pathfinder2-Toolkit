import { Injectable } from '@angular/core';
import {
  Affliction,
  Feat,
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
        name: 'Dwarf',
        type: ['UNTYPED']
      },
      {
        id: 2,
        name: 'Elf',
        type: ['UNTYPED']
      },
      {
        id: 3,
        name: 'Gnome',
        type: ['UNTYPED']
      },
      {
        id: 4,
        name: 'Goblin',
        type: ['UNTYPED']
      },
      {
        id: 5,
        name: 'Halfling',
        type: ['UNTYPED']
      },
      {
        id: 6,
        name: 'Human',
        type: ['UNTYPED']
      },
      {
        id: 7,
        name: 'Half Elf',
        type: ['UNTYPED']
      },
      {
        id: 8,
        name: 'Orc',
        type: ['UNTYPED']
      },
      {
        id: 9,
        name: 'Half Orc',
        type: ['UNTYPED']
      },
      {
        id: 10,
        name: 'Alchemist',
        type: ['UNTYPED']
      },
      {
        id: 11,
        name: 'Barbarian',
        type: ['UNTYPED']
      },
      {
        id: 12,
        name: 'Bard',
        type: ['UNTYPED']
      },
      {
        id: 13,
        name: 'Cleric',
        type: ['UNTYPED']
      },
      {
        id: 14,
        name: 'Druid',
        type: ['UNTYPED']
      },
      {
        id: 15,
        name: 'Fighter',
        type: ['UNTYPED']
      },
      {
        id: 16,
        name: 'Monk',
        type: ['UNTYPED']
      },
      {
        id: 17,
        name: 'Paladin',
        type: ['UNTYPED']
      },
      {
        id: 18,
        name: 'Ranger',
        type: ['UNTYPED']
      },
      {
        id: 19,
        name: 'Rogue',
        type: ['UNTYPED']
      },
      {
        id: 20,
        name: 'Sorcerer',
        type: ['UNTYPED']
      },
      {
        id: 21,
        name: 'Wizard',
        type: ['UNTYPED']
      },
      {
        id: 22,
        name: 'Heritage',
        type: ['UNTYPED']
      },
      {
        id: 23,
        name: 'General',
        type: ['UNTYPED']
      },
      {
        id: 24,
        name: 'Skill',
        type: ['UNTYPED']
      },
      {
        id: 25,
        name: 'Downtime',
        type: ['UNTYPED']
      },
      {
        id: 26,
        name: 'Secret',
        type: ['UNTYPED']
      },
      {
        id: 27,
        name: 'Move',
        type: ['UNTYPED']
      },
      {
        id: 28,
        name: 'Attack',
        type: ['UNTYPED']
      },
      {
        id: 29,
        name: 'Visual',
        type: ['UNTYPED']
      },
      {
        id: 30,
        name: 'Manipulate',
        type: ['UNTYPED']
      },
      {
        id: 31,
        name: 'Death',
        type: ['UNTYPED']
      },
      {
        id: 32,
        name: 'Emotion',
        type: ['UNTYPED']
      },
      {
        id: 33,
        name: 'Fear',
        type: ['UNTYPED']
      },
      {
        id: 34,
        name: 'Healing',
        type: ['UNTYPED']
      },
      {
        id: 35,
        name: 'Concentrate',
        type: ['UNTYPED']
      },
      {
        id: 36,
        name: 'Additive',
        type: ['UNTYPED']
      },
      {
        id: 37,
        name: 'Mental',
        type: ['UNTYPED']
      },
      {
        id: 38,
        name: 'Rage',
        type: ['UNTYPED']
      },
      {
        id: 39,
        name: 'Morph',
        type: ['UNTYPED']
      },
      {
        id: 40,
        name: 'Primal',
        type: ['UNTYPED']
      },
      {
        id: 41,
        name: 'Totem',
        type: ['UNTYPED']
      },
      {
        id: 42,
        name: 'Transmutation',
        type: ['UNTYPED']
      },
      {
        id: 43,
        name: 'Arcane',
        type: ['UNTYPED']
      },
      {
        id: 44,
        name: 'Evocation',
        type: ['UNTYPED']
      },
      {
        id: 45,
        name: 'Polymorph',
        type: ['UNTYPED']
      },
      {
        id: 46,
        name: 'Divine',
        type: ['UNTYPED']
      },
      {
        id: 47,
        name: 'Necromancy',
        type: ['UNTYPED']
      },
      {
        id: 48,
        name: 'Auditory',
        type: ['UNTYPED']
      },
      {
        id: 49,
        name: 'Fortune',
        type: ['UNTYPED']
      },
      {
        id: 50,
        name: 'Metamagic',
        type: ['UNTYPED']
      },
      {
        id: 51,
        name: 'Positive',
        type: ['UNTYPED']
      },
      {
        id: 52,
        name: 'Negative',
        type: ['UNTYPED']
      },
      {
        id: 53,
        name: 'Good',
        type: ['UNTYPED']
      },
      {
        id: 54,
        name: 'Evil',
        type: ['UNTYPED']
      },
      {
        id: 55,
        name: 'Animal Order',
        type: ['UNTYPED']
      },
      {
        id: 56,
        name: 'Chaotic',
        type: ['UNTYPED']
      },
      {
        id: 57,
        name: 'Disease',
        type: ['UNTYPED']
      },
      {
        id: 58,
        name: 'Acid',
        type: ['UNTYPED']
      },
      {
        id: 59,
        name: 'Cantrip',
        type: ['UNTYPED']
      },
      {
        id: 60,
        name: 'Air',
        type: ['UNTYPED']
      },
      {
        id: 61,
        name: 'Conjuration',
        type: ['UNTYPED']
      },
      {
        id: 62,
        name: 'Abjuration',
        type: ['UNTYPED']
      },
      {
        id: 63,
        name: 'Divination',
        type: ['UNTYPED']
      },
      {
        id: 64,
        name: 'Uncommon',
        type: ['UNTYPED']
      },
      {
        id: 65,
        name: 'Rare',
        type: ['UNTYPED']
      }
    ];
    const feats: Array<Feat> = [
      {
        id: 1,
        name: 'Far Lobber',
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
        name: 'Ancient’s Blood',
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
          'form, you gain the animal trait. You can Dismiss the spell.<br />' +
          '&emsp;You gain the following statistics and abilities regardless of ' +
          'which battle form you choose:' +
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
          '&emsp;You also gain specific abililties based on the form you choose:' +
          '<ul>' +
          '<li>' +
          '<b>Bat</b> Speed 20 feet, fly Speed 30 feet; precise echolocation 40 feet; ' +
          '<b>Melee</b> [one-action] fangs, <b>Damage</b> 2d8 piercing; ' +
          '<b>Melee</b> [one-action] wing (agile), <b>Damage</b> 2d6 bludgeoning;' +
          '</li>' +
          '<li>' +
          '<b>Bird</b> Speed 10 feet, fly Speed 50 feet; ' +
          '<b>Melee</b> [one-action] beak, <b>Damage</b> 2d8 piercing; ' +
          '<b>Melee</b> [one-action] talon (agile), <b>Damage</b> 1d10 slashing; ' +
          '</li>' +
          '<li>' +
          '<b>Pterosaur</b> Speed 10 feet, fly Speed 40 feet; imprecise scent 30 feet; ' +
          '<b>Melee</b> [one-action] beak, <b>Damage</b> 3d6 piercing;' +
          '</li>' +
          '<li>' +
          '<b>Wasp</b> Speed 20 feet, fly Speed 40 feet; ' +
          '<b>Melee</b> [one-action] stinger, <b>Damage</b> 1d8 piercing plus 1d6 persistent poison;' +
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
        level: 10,
        traits: [traits[62]],
        traditions: [SpellTraditions.OCCULT],
        castingTime: StandardActionTypes.TRIPLE_ACTION,
        components: [SpellComponents.MATERIAL, SpellComponents.SOMATIC, SpellComponents.VERBAL],
        shortDesc: 'Warp reality to duplicate occult spells.',
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
      } as Spell,
      {
        id: 8,
        name: 'Bind Soul',
        level: 9,
        traits: [traits[63], traits[53], traits[46]],
        traditions: [SpellTraditions.DIVINE, SpellTraditions.OCCULT],
        castingTime: StandardActionTypes.DOUBLE_ACTION,
        components: [SpellComponents.SOMATIC, SpellComponents.VERBAL],
        requirements: 'black sapphire with a gp value of at least the target’s level x100',
        range: '30 feet',
        targets: '1 creature that died within the last minute',
        duration: 'unlimited',
        shortDesc: 'Imprison a dead creature’s soul',
        description:
          'You wrench the target’s soul away before it can pass on to the ' +
          'afterlife and imprison it in a black sapphire.<br />' +
          '&emsp;While the soul is in the gem, the target can’t be returned to ' +
          'life through any means, even powerful magic such as wish. If ' +
          'the gem is destroyed or bind soul is counteracted on the gem, ' +
          'the soul is freed. The gem has AC 16 and Hardness 10. A gem ' +
          'can’t hold more than one soul, and any attempt wastes the spell.'
      } as Spell,
      {
        id: 9,
        name: 'Antimagic Field',
        level: 8,
        traits: [traits[64], traits[61]],
        traditions: [SpellTraditions.ARCANE, SpellTraditions.DIVINE, SpellTraditions.OCCULT],
        castingTime: StandardActionTypes.TRIPLE_ACTION,
        components: [SpellComponents.MATERIAL, SpellComponents.SOMATIC, SpellComponents.VERBAL],
        area: '10-foot emanation',
        duration: 'sustained up to 1 minute',
        shortDesc: 'Magic doesn’t function in an area around you.',
        description:
          'You repel all magic from the target area, preventing spells ' +
          'and other magic from functioning. Spells can’t penetrate the ' +
          'area, magic items cease to function within it, and no one ' +
          'inside can cast spells or use magic abilities. Likewise, spells— ' +
          'such as dispel magic—can’t affect the field itself unless they ' +
          'are of a higher level. Magic effects resume the moment they ' +
          'pass outside the field. For example, a ray fired from one side ' +
          'of the field could target a creature on the other side (as long ' +
          'as caster and target are both outside the field). A summoned ' +
          'creature winks out of existence but reappears if the field ' +
          'moves or ends. Invested magic items cease to function, but ' +
          'they remain invested and resume functioning when they exit ' +
          'the field; the ability boost from an apex item isn’t suppressed ' +
          'within the field. Spells of a higher level than the antimagic ' +
          'field overcome its effects, and can even be cast by a creature ' +
          'within the field.<br />' +
          '&emsp;The field disrupts only magic, so a +3 longsword still ' +
          'functions as a longsword. Magically created creatures (such ' +
          'as golems) function normally within an antimagic field.'
      } as Spell
    ];

    return { traits, feats, spells };
  }
}
