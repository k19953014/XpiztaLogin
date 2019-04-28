import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from './programs/Login/Login.component';
import { Tri001Component} from './programs/tri001/tri001.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'tri001', component: Tri001Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
