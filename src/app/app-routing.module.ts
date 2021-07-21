import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { OtrosComponent } from './Productos/otros/otros.component';
import { CasamientosComponent } from './Productos/Vestidos/casamientos/casamientos.component';
import { FiestaComponent } from './Productos/Vestidos/fiesta/fiesta.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/bienvenido', pathMatch: 'full'
  },
  {
    path: 'bienvenido', component: BienvenidoComponent
  },
  {
    path: 'productos/vestidos/casamiento', component: CasamientosComponent
  },
  {
    path: 'productos/vestidos/fiesta', component: FiestaComponent
  },
  {
    path: 'productos/otros', component: OtrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
