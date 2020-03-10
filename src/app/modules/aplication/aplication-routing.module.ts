import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './pages/map/map.component';

const aplicationRoutes: Routes = [
  {
    path: 'map',
    component: MapComponent
  },
  // otherwise redirect to 404
  {
    path: '**',
    redirectTo: 'map'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( aplicationRoutes )
  ], exports: [
    RouterModule
  ]
})

export class AplicationRoutingModule { }
