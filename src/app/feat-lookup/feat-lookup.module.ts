import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'angular-pipes';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { FeatLookupComponent } from './feat-lookup.component';
import { FeatListComponent } from './feat-list/feat-list.component';
import { FeatLookupRoutingModule } from '@app/feat-lookup/feat-lookup-routing.module';
import { FeatLookupService } from '@app/feat-lookup/feat-lookup.service';
import { FeatLookupHttpErrorHandlerService } from '@app/feat-lookup/feat-lookup-http-error-handler.service';
import { FeatItemComponent } from './feat-item/feat-item.component';

@NgModule({
  declarations: [FeatLookupComponent, FeatListComponent, FeatItemComponent],
  imports: [
    CommonModule,
    FeatLookupRoutingModule,
    MaterialModule,
    NgPipesModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: false
    })
  ],
  providers: [FeatLookupService, FeatLookupHttpErrorHandlerService]
})
export class FeatLookupModule {}
