import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { TeRojoComponent } from './te-rojo/te-rojo.component';
import { TeVerdeComponent } from './te-verde/te-verde.component';
import { TeNegroComponent } from './te-negro/te-negro.component';
import { TeBlancoComponent } from './te-blanco/te-blanco.component';
import { TeDecafComponent } from './te-decaf/te-decaf.component';
import { TeOolongComponent } from './te-oolong/te-oolong.component';
import { InfusionesComponent } from './infusiones/infusiones.component';
import { RooibosComponent } from './rooibos/rooibos.component';
import { LoginComponent} from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { LoginRegistroComponent } from './login-registro/login-registro.component';
import { NovedadComponent } from './novedad/novedad.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    TeRojoComponent,
    TeVerdeComponent,
    TeNegroComponent,
    TeBlancoComponent,
    TeDecafComponent,
    TeOolongComponent,
    InfusionesComponent,
    RooibosComponent,
    LoginComponent,
    RegistroComponent,
    LoginRegistroComponent,
    NovedadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
