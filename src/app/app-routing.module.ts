import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HomeComponent } from './pages/home/home.component';


// app routes
const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PortafolioComponent,
  },
  {
      path: 'about' ,
      component: AboutComponent
  },
  {
      path: 'item/:prod-id',
      component: ItemComponent
  },
  {
      path: '**' ,
      pathMatch: 'full' , redirectTo: 'home'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
