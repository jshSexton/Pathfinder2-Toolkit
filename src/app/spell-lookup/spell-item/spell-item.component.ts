import { Component, Input, OnInit } from '@angular/core';
import { Spell, StandardActionSymbols, StandardActionTypes } from '@app/shared/app-interfaces-enums';
import { ActivatedRoute } from '@angular/router';
import { SpellLookupService } from '@app/spell-lookup/spell-lookup.service';
import { Utils } from '@app/shared/utils.service';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.scss']
})
export class SpellItemComponent implements OnInit {
  @Input() spell: Spell;
  notFound = false;
  actionSymbolUrl: string;

  constructor(private route: ActivatedRoute, private spellService: SpellLookupService, private utils: Utils) {}

  ngOnInit() {
    if (!this.spell) {
      this.getSpell();
    } else {
      this.actionSymbolUrl = this.utils.getActionSymbol(this.spell.castingTime);
    }
  }

  getSpell(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spellService.getSpellById(id).subscribe(spellData => {
      if (spellData.constructor === Object && Object.entries(spellData).length === 0) {
        // API returned empty spell object, handle it
        this.notFound = true;
        return;
      }

      this.spell = spellData;
      this.actionSymbolUrl = this.utils.getActionSymbol(this.spell.castingTime);
    });
  }
}
