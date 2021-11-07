import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackenComponent } from './backen/backen.component';

const routes: Routes = [
  {path: 'get-backend', component: BackenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
