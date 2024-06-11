import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { HomeComponent } from './routes/home/home.component';
import { MenuComponent } from './routes/menu/menu.component';
import { SobreEmpresaComponent } from './routes/sobre-empresa/sobre-empresa.component';
import { SucursalesComponent } from './routes/sucursales/sucursales.component';
import { CarritoComponent } from './routes/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    MenuComponent,
    SobreEmpresaComponent,
    SucursalesComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
