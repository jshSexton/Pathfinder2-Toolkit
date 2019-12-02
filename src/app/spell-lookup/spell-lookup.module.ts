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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@app/in-memory-data.service';
import { SpellLookupService } from '@app/spell-lookup/spell-lookup.service';
import { SpellLookupHttpErrorHandlerService } from '@app/spell-lookup/spell-lookup-http-error-handler.service';

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
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: false
    })
  ],
  providers: [SpellLookupService, SpellLookupHttpErrorHandlerService]
})
export class SpellLookupModule {}
