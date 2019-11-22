import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { FeatListComponent } from '@app/feat-lookup/feat-list/feat-list.component';
import { extract } from '@app/core';
import { FeatLookupComponent } from '@app/feat-lookup/feat-lookup.component';
import { FeatItemComponent } from '@app/feat-lookup/feat-item/feat-item.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'feats',
      component: FeatLookupComponent,
      data: { title: extract('Feats') },
      children: [
        {
          path: '',
          redirectTo: 'lookup',
          pathMatch: 'full'
        },
        {
          path: 'lookup',
          component: FeatListComponent
        },
        {
          path: 'detail/:id',
          component: FeatItemComponent
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
export class FeatLookupRoutingModule {}
