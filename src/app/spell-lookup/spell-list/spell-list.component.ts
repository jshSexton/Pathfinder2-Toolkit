import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatChipInputEvent,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Spell, StandardActionSymbols, StandardActionTypes, Trait } from '@app/shared/app-interfaces-enums';
import { FormControl } from '@angular/forms';
import { SpellFilters, TableKey } from '@app/spell-lookup/spell-list/spell-list-interfaces-enums';
import { forkJoin, Observable } from 'rxjs';
import { Options } from 'ng5-slider';
import { SpellLookupService } from '@app/spell-lookup/spell-lookup.service';
import { delay, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
    trigger('rowExpand', [
      state('collapsed, void', style({ backgroundColor: '*' })),
      state('expanded', style({ backgroundColor: '#efe5fd' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class SpellListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('traitInput', { static: false }) traitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  spellsData: Array<Spell>;
  traitsData: Array<Trait>;
  dataSource: MatTableDataSource<Spell>;
  displayedColumns = ['name', 'level', 'actions', 'traits', 'shortDesc'];
  visibleSpells: Array<any> = [];
  nameFilter = new FormControl('');
  traitsFilter = new FormControl('');
  actionFilter = new FormControl('');
  levelFilter = new FormControl([0, 10]);
  filterValues: SpellFilters = { name: '', traits: [], action: '', level: { value: 0, highValue: 10 } };
  actionOptions: Array<any> = [];
  autoTraits: Observable<Array<Trait>>;
  levelFilterOptions: Options = { floor: 0, ceil: 10, step: 1 };
  tableKeys: Array<TableKey>;

  constructor(private spellService: SpellLookupService) {
    this.setTableKeys();
  }

  ngOnInit() {
    forkJoin([this.spellService.getAllTraits(), this.spellService.getAllSpells().pipe(delay(3000))]).subscribe(
      ([traitRes, spellRes]) => {
        this.spellsData = spellRes;
        this.traitsData = traitRes;

        this.initAfterGetData();
      }
    );
  }

  initAfterGetData() {
    this.setActionOptions();
    this.dataSource = new MatTableDataSource(this.spellsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortData = this.sortData;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.tableFilter;

    this.setFilterEvents();
  }

  getTraitText(trait: Trait) {
    return trait.displayText;
  }

  getActionText(action: StandardActionTypes | string, noEmptyStrings: boolean = false): string {
    let actionText: string;
    switch (action) {
      case StandardActionTypes.SINGLE_ACTION:
        actionText = '1 Action';
        break;
      case StandardActionTypes.DOUBLE_ACTION:
        actionText = '2 Actions';
        break;
      case StandardActionTypes.TRIPLE_ACTION:
        actionText = '3 Actions';
        break;
      case StandardActionTypes.REACTION_ACTION:
        actionText = 'Reaction';
        break;
      case StandardActionTypes.FREE_ACTION:
        actionText = 'Free Action';
        break;
      case StandardActionTypes.NO_ACTION:
        if (noEmptyStrings) {
          actionText = 'No Action Specified';
        } else {
          actionText = '';
        }
        break;
      default:
        actionText = action;
    }

    return actionText;
  }

  setActionOptions() {
    const distinctActions = [...new Set(this.spellsData.map(spell => spell.castingTime))].sort();
    distinctActions.forEach(action => {
      this.actionOptions.push({
        value: action,
        text: this.getActionText(action, true)
      });
    });
  }

  setTableKeys() {
    this.tableKeys = [];
    this.tableKeys.push({
      icon: StandardActionSymbols.FREE_ACTION,
      text: this.getActionText(StandardActionTypes.FREE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.SINGLE_ACTION,
      text: this.getActionText(StandardActionTypes.SINGLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.DOUBLE_ACTION,
      text: this.getActionText(StandardActionTypes.DOUBLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.TRIPLE_ACTION,
      text: this.getActionText(StandardActionTypes.TRIPLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.REACTION_ACTION,
      text: this.getActionText(StandardActionTypes.REACTION_ACTION)
    });
  }

  setFilterEvents() {
    this.nameFilter.valueChanges.subscribe(name => {
      this.filterValues.name = name ? name : '';
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.autoTraits = this.traitsFilter.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value.trim() : value && value.displayText ? value.displayText : null)),
      map(traitName => (traitName ? this._filterAutoTraits(traitName) : this.traitsData.slice()))
    );

    this.actionFilter.valueChanges.subscribe(action => {
      this.filterValues.action = action ? action : '';
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.levelFilter.valueChanges.subscribe(levels => {
      this.filterValues.level = levels ? { value: levels[0], highValue: levels[1] } : { value: 1, highValue: 20 };
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  onSpellClick(spell: any) {
    if (this.visibleSpells.includes(spell)) {
      this.visibleSpells.splice(this.visibleSpells.indexOf(spell), 1);
    } else {
      this.visibleSpells.push(spell);
    }
  }

  sortData(data: Spell[], sort: MatSort) {
    if (!sort.active || sort.direction === '') {
      return data;
    }

    const compare = (a: any, b: any, isAsc: boolean) => {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'traits':
          return compare(a.traits.join(', '), b.traits.join(', '), isAsc);
        case 'actions':
          const a_action = a.castingTime === StandardActionTypes.NO_ACTION ? '' : a.castingTime;
          const b_action = b.castingTime === StandardActionTypes.NO_ACTION ? '' : b.castingTime;
          return compare(a_action, b_action, isAsc);
        case 'level':
          return compare(a.level, b.level, isAsc);
        default:
          return 0;
      }
    });
  }

  tableFilter(data: Spell, filter: string) {
    const searchTerms = JSON.parse(filter);

    const nameCheck = data.name.toLowerCase().indexOf(searchTerms.name) !== -1;
    const traitsCheck =
      searchTerms.traits.every((searchTrait: { id: any }) => {
        return (
          data.traits.find(dataTrait => {
            return dataTrait.id === searchTrait.id;
          }) !== undefined
        );
      }) || searchTerms.traits.length === 0;
    const actionCheck = data.castingTime.indexOf(searchTerms.action) !== -1;
    const levelCheck = data.level >= searchTerms.level.value && data.level <= searchTerms.level.highValue;

    return nameCheck && traitsCheck && actionCheck && levelCheck;
  }

  removeTraitChip(trait: Trait) {
    const index = this.filterValues.traits.indexOf(trait);

    if (index >= 0) {
      this.filterValues.traits.splice(index, 1);
      this.dataSource.filter = JSON.stringify(this.filterValues);
    }
  }

  addTraitChip(event: MatChipInputEvent) {
    // Add Traits only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our trait
      if ((value || '').trim()) {
        const tempTrait: Trait = {
          id: -1,
          name: 'CUSTOM_TRAIT',
          displayText: value
        };
        this.filterValues.traits.push(tempTrait);
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.traitsFilter.setValue(null);
    }
  }

  traitFilterSelected(event: MatAutocompleteSelectedEvent) {
    this.filterValues.traits.push(event.option.value);
    this.dataSource.filter = JSON.stringify(this.filterValues);
    this.traitInput.nativeElement.value = '';
    this.traitsFilter.setValue(null);
  }

  traitAutoDisplay(trait?: Trait) {
    return trait ? trait.displayText : undefined;
  }

  onFilterResetClick() {
    this.nameFilter.reset();
    this.traitsFilter.reset();
    this.filterValues.traits = [];
    this.actionFilter.reset();
    this.levelFilter.setValue([0, 10]);
  }

  private _filterAutoTraits(value: string) {
    const filterValue = value.toLowerCase();

    return this.traitsData.filter(trait => trait.displayText.toLowerCase().indexOf(filterValue) >= 0);
  }
}
