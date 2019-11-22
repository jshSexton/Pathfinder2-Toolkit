export enum StandardActionTypes {
  SINGLE_ACTION = '1_ACTION',
  DOUBLE_ACTION = '2_ACTION',
  TRIPLE_ACTION = '3_ACTION',
  REACTION_ACTION = 'REACTION',
  FREE_ACTION = 'FREE',
  NO_ACTION = 'NONE'
}

export enum StandardActionSymbols {
  SINGLE_ACTION = 'assets/symbols/actions_1.png',
  DOUBLE_ACTION = 'assets/symbols/actions_2.png',
  TRIPLE_ACTION = 'assets/symbols/actions_3.png',
  REACTION_ACTION = 'assets/symbols/actions_reaction.png',
  FREE_ACTION = 'assets/symbols/actions_0.png',
  NO_ACTION = ''
}

export enum SpellActionsTypes {}

export enum FeatureTypes {
  FEAT_TYPE = 'FEAT',
  SPELL_TYPE = 'SPELL',
  POWER_TYPE = 'POWER'
}

export interface Trait {
  id: any;
  name: string;
  displayText: string;
}

export interface Feature {
  id: any;
  name: any;
  type: FeatureTypes;
  traits: Array<Trait>;
  description: string;
  shortDesc: string;
  successText: string;
  critSuccessText: string;
  failText: string;
  critFailText: string;
}

export interface Feat extends Feature {
  actions: StandardActionTypes;
  levelRequirement: number;
  prerequisites: string;
  frequency: string;
  cost: string;
  trigger: string;
  requirements: string;
  special: string;
}
