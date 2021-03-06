import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TeVerdeComponent } from './te-verde/te-verde.component';
import { TeRojoComponent } from './te-rojo/te-rojo.component';
import { TeNegroComponent } from './te-negro/te-negro.component';
import { TeBlancoComponent } from './te-blanco/te-blanco.component';
import { TeOolongComponent } from './te-oolong/te-oolong.component';
import { InfusionesComponent } from './infusiones/infusiones.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';

import { ProductoComponent } from './producto/producto.component';
import { Encuesta1Component } from './encuesta1/encuesta1.component';
import { Encuesta2Component } from './encuesta2/encuesta2.component';
import { Encuesta3Component } from './encuesta3/encuesta3.component';
import { CestaComponent } from './cesta/cesta.component';
import { Error404Component } from './error404/error404.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InputAdminComponent } from './input-admin/input-admin.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';






const routes: Routes = [
  {path: '', component:InicioComponent, data: {animation: 'Inicio'}},
 { path: 'inicioUsuario', component: InicioUsuarioComponent, data:{animation: 'InicioUsuario'}},
  { path: 'te-verde', component: TeVerdeComponent },
  { path: 'te-rojo', component: TeRojoComponent },
  { path: 'te-negro', component: TeNegroComponent},
  { path: 'te-blanco', component: TeBlancoComponent},
  { path: 'te-oolong', component: TeOolongComponent,},
  { path: 'infusiones', component: InfusionesComponent },
  { path: 'iniciosesion', component: LoginRegistroComponent },
  { path: 'cesta', component: CestaComponent },
  { path: 'usuario/encuesta/paso1', component: Encuesta1Component, data:{animation: 'Encuesta'} },
  { path: 'usuario/encuesta/paso2', component: Encuesta2Component, data:{animation: 'Encuesta'} },
  { path: 'usuario/encuesta/paso3', component: Encuesta3Component, data:{animation: 'Encuesta'} },
  { path: 'producto/:id', component: ProductoComponent, data:{animation: 'Producto'} },
  { path: 'error404', component: Error404Component },
  { path: 'busqueda/:nombre', component: BusquedaComponent },
 



  {path: 'te-verde', component:TeVerdeComponent},
  {path: 'te-rojo', component:TeRojoComponent},
  {path: 'te-negro', component:TeNegroComponent},
  {path: 'te-blanco', component:TeBlancoComponent},
  {path: 'te-oolong', component:TeOolongComponent},
  {path: 'infusiones', component:InfusionesComponent},

  {path: 'iniciosesion', component:LoginRegistroComponent},
  {path: 'cesta', component:CestaComponent},
  {path: 'usuario/encuesta/paso1', component:Encuesta1Component},
  {path: 'usuario/encuesta/paso2', component:Encuesta2Component},
  {path: 'usuario/encuesta/paso3', component:Encuesta3Component},
  
  {path: 'input-admin', component:InputAdminComponent},

  {path: 'producto/:id', component:ProductoComponent},
  {path: 'modificar-producto/:id', component:ModificarProductoComponent},

  {path: 'error404', component:Error404Component},
  {path: 'busqueda/:nombre', component:BusquedaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
