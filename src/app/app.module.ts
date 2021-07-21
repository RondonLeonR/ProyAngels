import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CasamientosComponent } from './Productos/Vestidos/casamientos/casamientos.component';
import { FiestaComponent } from './Productos/Vestidos/fiesta/fiesta.component';
import { OtrosComponent } from './Productos/otros/otros.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    CasamientosComponent,
    FiestaComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
