import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellLookupComponent } from './spell-lookup.component';
import { SpellItemComponent } from './spell-item/spell-item.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SpellLookupRoutingModule } from '@app/spell-lookup/spell-lookup-routing.module';
import { MaterialModule } from '@app/material.module';
import { NgPipesModule } from 'angular-pipes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '@app/shared';
import { SpellLookupService } from '@app/spell-lookup/services/spell-lookup.service';
import { SpellLookupHttpErrorHandlerService } from '@app/spell-lookup/services/spell-lookup-http-error-handler.service';

@NgModule({
  declarations: [SpellLookupComponent, SpellItemComponent, SpellListComponent],
  imports: [
    CommonModule,
    SpellLookupRoutingModule,
    MaterialModule,
    NgPipesModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    SharedModule
  ],
  providers: [SpellLookupService, SpellLookupHttpErrorHandlerService]
})
export class SpellLookupModule {}
