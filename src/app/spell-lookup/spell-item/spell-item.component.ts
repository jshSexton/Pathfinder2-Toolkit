import { Component, Input, OnInit } from '@angular/core';
import { Spell, StandardActionTypes } from '@app/shared/app-interfaces-enums';
import { ActivatedRoute } from '@angular/router';
import { SpellLookupService } from '@app/spell-lookup/services/spell-lookup.service';
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
  spellLevel: string;

  constructor(private route: ActivatedRoute, private spellService: SpellLookupService, private utils: Utils) {}

  ngOnInit() {
    if (!this.spell) {
      this.getSpell();
    } else {
      this.initAfterData();
    }
  }

  getSpell(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:', id);
    this.spellService.getSpellById(id).subscribe(spellData => {
      if (spellData.constructor === Object && Object.entries(spellData).length === 0) {
        // API returned empty spell object, handle it
        this.notFound = true;
        return;
      }

      this.spell = spellData;
      this.initAfterData();
    });
  }

  initAfterData() {
    this.actionSymbolUrl = this.utils.getActionSymbol(this.spell.castingTime);
    this.spellLevel = this.spell.level === 0 ? 'Cantrip 1' : `Spell ${this.spell.level}`;
    this.parseDescriptionText();
  }

  parseDescriptionText() {
    this.spell.description = this.spell.description.replace(
      /\[\b(\w*one-action\w*)\b]/g,
      `<span>
                    <img src="${this.utils.getActionSymbol(StandardActionTypes.SINGLE_ACTION)}"
                        style="height: 20px; margin-top: -4px" alt="One Action"/>
                   </span>`
    );

    this.spell.description = this.spell.description.replace(
      /\[\b(\w*two-action\w*)\b]/g,
      `<span>
                    <img src="${this.utils.getActionSymbol(StandardActionTypes.DOUBLE_ACTION)}"
                        style="height: 20px; margin-top: -4px" alt="Two Actions"/>
                   </span>`
    );

    this.spell.description = this.spell.description.replace(
      /\[\b(\w*three-action\w*)\b]/g,
      `<span>
                    <img src="${this.utils.getActionSymbol(StandardActionTypes.TRIPLE_ACTION)}"
                        style="height: 20px; margin-top: -4px" alt="Three Actions"/>
                   </span>`
    );

    this.spell.description = this.spell.description.replace(
      /\[\b(\w*reaction\w*)\b]/g,
      `<span>
                    <img src="${this.utils.getActionSymbol(StandardActionTypes.REACTION_ACTION)}"
                        style="height: 20px; margin-top: -4px" alt="Reaction"/>
                   </span>`
    );

    this.spell.description = this.spell.description.replace(
      /\[\b(\w*free-action\w*)\b]/g,
      `<span>
                    <img src="${this.utils.getActionSymbol(StandardActionTypes.FREE_ACTION)}"
                        style="height: 20px; margin-top: -4px" alt="Free Action"/>
                   </span>`
    );
  }
}
