import { Trait } from '../../shared/app-interfaces-enums';

export interface FeatFilters {
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
