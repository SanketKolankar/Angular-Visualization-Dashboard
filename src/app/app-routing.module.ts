import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  {path:"chart",component:MychartComponent},
  {path:"",component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
