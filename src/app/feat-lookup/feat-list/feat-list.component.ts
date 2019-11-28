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
import { Feat, StandardActionSymbols, StandardActionTypes, Trait } from '@app/shared/app-interfaces-enums';
import { FormControl } from '@angular/forms';
import { FeatFilters, TableKey } from '@app/feat-lookup/feat-list/feat-list-interfaces-enums';
import { forkJoin, Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Options } from 'ng5-slider';
import { FeatLookupService } from '@app/feat-lookup/feat-lookup.service';
import { delay, map, startWith } from 'rxjs/operators';
import { Utils } from '@app/shared/utils.service';

@Component({
  selector: 'app-feat-list',
  templateUrl: './feat-list.component.html',
  styleUrls: ['./feat-list.component.scss'],
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
export class FeatListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('traitInput', { static: false }) traitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  featsData: Array<Feat>;
  traitsData: Array<Trait>;
  dataSource: MatTableDataSource<Feat>;
  displayedColumns = ['name', 'level', 'actions', 'traits', 'shortDesc'];
  visibleFeats: Array<any> = [];
  nameFilter = new FormControl('');
  traitsFilter = new FormControl('');
  actionFilter = new FormControl('');
  levelFilter = new FormControl([1, 20]);
  filterValues: FeatFilters = { name: '', traits: [], action: '', level: { value: 1, highValue: 20 } };
  actionOptions: Array<any> = [];
  autoTraits: Observable<Array<Trait>>;
  levelFilterOptions: Options = { floor: 1, ceil: 20, step: 1 };
  tableKeys: Array<TableKey>;

  constructor(private featService: FeatLookupService, private utils: Utils) {
    this.setActionOptions();
    this.setTableKeys();
  }

  ngOnInit() {
    forkJoin([this.featService.getAllTraits(), this.featService.getAllFeats().pipe(delay(3000))]).subscribe(
      ([traitRes, featRes]) => {
        this.featsData = featRes;
        this.traitsData = traitRes;

        this.initAfterGetData();
      }
    );
  }

  initAfterGetData() {
    this.dataSource = new MatTableDataSource(this.featsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortData = this.sortData;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = this.tableFilter;

    this.setFilterEvents();
  }

  getTraitText(trait: Trait) {
    return trait.displayText;
  }

  setActionOptions() {
    this.actionOptions.push({
      value: StandardActionTypes.NO_ACTION,
      text: this.utils.getActionText(StandardActionTypes.NO_ACTION, true)
    });
    this.actionOptions.push({
      value: StandardActionTypes.FREE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.FREE_ACTION, true)
    });
    this.actionOptions.push({
      value: StandardActionTypes.SINGLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.SINGLE_ACTION, true)
    });
    this.actionOptions.push({
      value: StandardActionTypes.DOUBLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.DOUBLE_ACTION, true)
    });
    this.actionOptions.push({
      value: StandardActionTypes.TRIPLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.TRIPLE_ACTION, true)
    });
    this.actionOptions.push({
      value: StandardActionTypes.REACTION_ACTION,
      text: this.utils.getActionText(StandardActionTypes.REACTION_ACTION, true)
    });
  }

  setTableKeys() {
    this.tableKeys = [];
    this.tableKeys.push({
      icon: StandardActionSymbols.FREE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.FREE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.SINGLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.SINGLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.DOUBLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.DOUBLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.TRIPLE_ACTION,
      text: this.utils.getActionText(StandardActionTypes.TRIPLE_ACTION)
    });
    this.tableKeys.push({
      icon: StandardActionSymbols.REACTION_ACTION,
      text: this.utils.getActionText(StandardActionTypes.REACTION_ACTION)
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

  onFeatClick(feat: any) {
    if (this.visibleFeats.includes(feat)) {
      this.visibleFeats.splice(this.visibleFeats.indexOf(feat), 1);
    } else {
      this.visibleFeats.push(feat);
    }
  }

  sortData(data: Feat[], sort: MatSort) {
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
          const a_action = a.actions === StandardActionTypes.NO_ACTION ? '' : a.actions;
          const b_action = b.actions === StandardActionTypes.NO_ACTION ? '' : b.actions;
          return compare(a_action, b_action, isAsc);
        case 'level':
          return compare(a.levelRequirement, b.levelRequirement, isAsc);
        default:
          return 0;
      }
    });
  }

  tableFilter(data: Feat, filter: string) {
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
    const actionCheck = data.actions.indexOf(searchTerms.action) !== -1;
    const levelCheck =
      data.levelRequirement >= searchTerms.level.value && data.levelRequirement <= searchTerms.level.highValue;

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
    this.levelFilter.setValue([1, 20]);
  }

  private _filterAutoTraits(value: string) {
    const filterValue = value.toLowerCase();

    return this.traitsData.filter(trait => trait.displayText.toLowerCase().indexOf(filterValue) >= 0);
  }
}
