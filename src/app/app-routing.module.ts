import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { MenuComponent } from './routes/menu/menu.component';
import { CarritoComponent } from './routes/carrito/carrito.component';
import { SobreEmpresaComponent } from './routes/sobre-empresa/sobre-empresa.component';
import { SucursalesComponent } from './routes/sucursales/sucursales.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'sobre-la-empresa', component: SobreEmpresaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'sucursales', component: SucursalesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
