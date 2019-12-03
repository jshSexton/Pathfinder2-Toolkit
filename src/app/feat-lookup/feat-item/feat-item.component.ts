import { Component, Input, OnInit } from '@angular/core';
import { Feat, StandardActionSymbols, StandardActionTypes } from '@app/shared/app-interfaces-enums';
import { ActivatedRoute } from '@angular/router';
import { FeatLookupService } from '../services/feat-lookup.service';
import { Utils } from '@app/shared/utils.service';

@Component({
  selector: 'app-feat-item',
  templateUrl: './feat-item.component.html',
  styleUrls: ['./feat-item.component.scss']
})
export class FeatItemComponent implements OnInit {
  @Input() feat: Feat;
  notFound = false;
  actionSymbolUrl: string;

  constructor(private route: ActivatedRoute, private featService: FeatLookupService, private utils: Utils) {}

  ngOnInit() {
    if (!this.feat) {
      this.getFeat();
    } else {
      this.actionSymbolUrl = this.utils.getActionSymbol(this.feat.actions);
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
      this.actionSymbolUrl = this.utils.getActionSymbol(this.feat.actions);
    });
  }
}
