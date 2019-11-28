import { Component, Input, OnInit } from '@angular/core';
import { Spell } from '@app/shared/app-interfaces-enums';

@Component({
  selector: 'app-spell-item',
  templateUrl: './spell-item.component.html',
  styleUrls: ['./spell-item.component.scss']
})
export class SpellItemComponent implements OnInit {
  @Input() spell: Spell;

  constructor() {}

  ngOnInit() {}
}
