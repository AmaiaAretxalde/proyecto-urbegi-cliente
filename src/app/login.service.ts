import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nombre: string;
  email:string;
  isAdmin:boolean=false;
  constructor(public http: HttpClient) { }

  async comprobarUsuario(email: string, password: string) {
    let response: any = await this.http.post('/api/usuario/login', { email, password }, { headers: { "Content-Type": "application/json" } })
      .toPromise()
    console.log(response.mensaje)
    if (response.mensaje !== 'denegado') {
      let respuesta: any = await this.http.post('/api/usuario/nombre', { email }, { headers: { "Content-Type": "application/json" } })
        .toPromise()
      this.nombre = respuesta.nombre
      this.email = respuesta.email;
      this.isAdmin=respuesta.isAdmin;
      console.log(respuesta)
      console.log(this.nombre)
      console.log("-----------------------------------------------------")

      return this.nombre;
    } else {
      this.isAdmin=false;

      return response.mensaje;
    }
  }

  async registrarUsuario(nombre:string, apellido:string, email:string, direccion:string, localidad:string, provincia:string, cp:string, telefono:string, password:string) {
    let response: any = await this.http.post('/api/usuario/registro', { nombre, apellido, email, direccion, localidad, provincia, cp, telefono, password },{headers:{"Content-Type":"application/json"}})
      .toPromise()
      console.log(response)
      this.nombre=response.user.nombre;
      this.email=response.user.email;
    return response.mensaje;
  }

  async anayadirSaborUsuario(sabores:string[]) {
    let email = this.email;
    console.log(`el email es ${this.email}`)
    let response: any = await this.http.post('/api/usuario/registro/sabores', {email, sabores},{headers:{"Content-Type":"application/json"}})
      .toPromise()
      console.log(response.mensaje)
    return response.mensaje;
  }

  async anayadirFuncionUsuario(funciones:string[]) {
    let email = this.email;
    console.log(`el email es ${this.email}`)
    let response: any = await this.http.post('/api/usuario/registro/funciones', {email, funciones},{headers:{"Content-Type":"application/json"}})
      .toPromise()
      console.log(response.mensaje)
    return response.mensaje;
  }


  async obtenerNombre(){
    let respuesta:any = await this.http.get('/api/usuario/nombre')
      .toPromise()
    console.log(respuesta.nombre)
    return respuesta.nombre;
  }

  checkIsAdmin(){
    console.log(this)
    return this.isAdmin;
  }

}
