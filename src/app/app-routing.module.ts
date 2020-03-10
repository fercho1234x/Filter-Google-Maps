import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationModule } from './modules/aplication/aplication.module';

const routes: Routes = [

  {
    path: '',
    loadChildren: './modules/aplication/aplication.module#AplicationModule'
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  // otherwise redirect to 404
  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'disabled',
      useHash: false
    })
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
