import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'angular-pipes';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { FeatLookupComponent } from './feat-lookup.component';
import { FeatListComponent } from './feat-list/feat-list.component';
import { FeatLookupRoutingModule } from '@app/feat-lookup/feat-lookup-routing.module';
import { FeatLookupService } from '@app/feat-lookup/services/feat-lookup.service';
import { FeatLookupHttpErrorHandlerService } from '@app/feat-lookup/services/feat-lookup-http-error-handler.service';
import { FeatItemComponent } from './feat-item/feat-item.component';
import { SharedModule } from '@app/shared';

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
    SharedModule
  ],
  providers: [FeatLookupService, FeatLookupHttpErrorHandlerService]
})
export class FeatLookupModule {}
