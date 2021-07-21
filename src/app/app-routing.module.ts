import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/bienvenido', pathMatch: 'full'
  },
  {
    path: 'bienvenido', component: BienvenidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
