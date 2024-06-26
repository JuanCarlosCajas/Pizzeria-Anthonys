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
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './routes/users/users.component';
import { PizzasComponent } from './routes/carrito/pizzas/pizzas.component';
import { PastasComponent } from './routes/carrito/pastas/pastas.component';
import { ComplementosComponent } from './routes/carrito/complementos/complementos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    MenuComponent,
    SobreEmpresaComponent,
    SucursalesComponent,
    CarritoComponent,
    UsersComponent,
    PizzasComponent,
    PastasComponent,
    ComplementosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
