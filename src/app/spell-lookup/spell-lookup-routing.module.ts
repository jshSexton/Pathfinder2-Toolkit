import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpellLookupComponent } from '@app/spell-lookup/spell-lookup.component';
import { extract } from '@app/core';
import { SpellListComponent } from '@app/spell-lookup/spell-list/spell-list.component';
import { SpellItemComponent } from '@app/spell-lookup/spell-item/spell-item.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'spells',
      component: SpellLookupComponent,
      data: { title: extract('Spells') },
      children: [
        {
          path: '',
          redirectTo: 'lookup',
          pathMatch: 'full'
        },
        {
          path: 'lookup',
          component: SpellListComponent
        },
        {
          path: 'detail/:id',
          component: SpellItemComponent
        }
      ]
    }
  ])
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellLookupRoutingModule {}
