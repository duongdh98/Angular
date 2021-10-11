import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './material-pages/auto-complete/auto-complete.component';
import { MaterialPagesComponent } from './material-pages/material-pages.component';

const routes: Routes = [
  {
    path: 'material', 
    component: MaterialPagesComponent,
    children: [
      {path:'auto-complete', component: AutoCompleteComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
