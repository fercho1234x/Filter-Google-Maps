import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { FilterComponent } from './components/filter/filter.component';
import { AplicationRoutingModule } from './aplication-routing.module';
import { MapComponent } from './pages/map/map.component';



@NgModule({
  declarations: [
    FilterComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    AplicationRoutingModule,
    GoogleMapsModule
  ]
})
export class AplicationModule { }
