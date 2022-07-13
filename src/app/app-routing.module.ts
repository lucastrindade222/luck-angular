import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawNumberComponent } from './view/draw-number/draw-number.component';
import { HomeComponent } from './view/home/home.component';
import { MainNavComponent } from './view/main-nav/main-nav.component';

const routes: Routes = [
  {
    path:"",
    component:MainNavComponent,
    children : [
      {path: '', component: HomeComponent },
      {path: 'drawNumber', component: DrawNumberComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
