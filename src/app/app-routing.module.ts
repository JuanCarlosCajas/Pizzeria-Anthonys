import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MenuComponent } from './routes/menu/menu.component';
import { CarritoComponent } from './routes/carrito/carrito.component';
import { SobreEmpresaComponent } from './routes/sobre-empresa/sobre-empresa.component';
import { SucursalesComponent } from './routes/sucursales/sucursales.component';
import { UsersComponent } from './routes/users/users.component';
import { PizzasComponent } from './routes/carrito/pizzas/pizzas.component';
import { PastasComponent } from './routes/carrito/pastas/pastas.component';
import { ComplementosComponent } from './routes/carrito/complementos/complementos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sobre-la-empresa', component: SobreEmpresaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'pizzas', component: PizzasComponent},
  {path: 'pastas', component: PastasComponent},
  {path: 'complementos', component: ComplementosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
