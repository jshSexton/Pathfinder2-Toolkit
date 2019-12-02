import { Trait } from '../../shared/app-interfaces-enums';

export interface SpellFilters {
  name: string;
  traits: Array<Trait>;
  action: string;
  level: LevelFilterRange;
}

export interface LevelFilterRange {
  value: number;
  highValue: number;
}

export interface TableKey {
  icon: string;
  text: string;
}
