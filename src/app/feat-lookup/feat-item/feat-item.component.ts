import { Component, Input, OnInit } from '@angular/core';
import { Feat, StandardActionSymbols, StandardActionTypes } from '@app/shared/app-interfaces-enums';
import { ActivatedRoute } from '@angular/router';
import { FeatLookupService } from '../feat-lookup.service';

@Component({
  selector: 'app-feat-item',
  templateUrl: './feat-item.component.html',
  styleUrls: ['./feat-item.component.scss']
})
export class FeatItemComponent implements OnInit {
  @Input() feat: Feat;
  notFound = false;
  actionSymbolUrl: string;

  constructor(private route: ActivatedRoute, private featService: FeatLookupService) {}

  ngOnInit() {
    if (!this.feat) {
      this.getFeat();
    } else {
      this.setActionSymbol();
    }
  }

  getFeat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.featService.getFeatById(id).subscribe(featData => {
      if (featData.constructor === Object && Object.entries(featData).length === 0) {
        // API returned empty feat object, handle it
        this.notFound = true;
        return;
      }
      this.feat = featData;
      this.setActionSymbol();
    });
  }

  setActionSymbol() {
    switch (this.feat.actions) {
      case StandardActionTypes.FREE_ACTION:
        this.actionSymbolUrl = StandardActionSymbols.FREE_ACTION;
        break;

      case StandardActionTypes.SINGLE_ACTION:
        this.actionSymbolUrl = StandardActionSymbols.SINGLE_ACTION;
        break;

      case StandardActionTypes.DOUBLE_ACTION:
        this.actionSymbolUrl = StandardActionSymbols.DOUBLE_ACTION;
        break;

      case StandardActionTypes.TRIPLE_ACTION:
        this.actionSymbolUrl = StandardActionSymbols.TRIPLE_ACTION;
        break;

      case StandardActionTypes.REACTION_ACTION:
        this.actionSymbolUrl = StandardActionSymbols.REACTION_ACTION;
        break;

      default:
        this.actionSymbolUrl = StandardActionSymbols.NO_ACTION;
    }
  }
}
