import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargarService {
  id:string;
  constructor(public http: HttpClient) { }

  async cargarNovedades(palabra1:string, palabra2:string){
    let response = await this.http.post('/api/cargar/novedades', { palabra1, palabra2 }, { headers: { "Content-Type": "application/json" } })
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarPorColor(color:string){
    let url = '/api/cargar/'+ color;
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarInfoPorTipo(tipo:string){
    let url = '/api/cargar/info/'+ tipo;
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }

  async cargarInfoProducto(id:string){
    let url = '/api/cargar/producto/'+ id;
    console.log(this.id)
    let response = await this.http.get(url)
    .toPromise();
    console.log(response);
    return response;
  }

  async mandarId(id:string){
    this.id=id;
    console.log(this.id)
    return this.id;
  }

  async pasarId(){
    console.log(this.id)
    return this.id;
  }

  async modificarTe(te, id){
    let response = await this.http.put('/api/admin/tea/'+id,{te},{headers:{"Content-Type":"application/json"}}).toPromise();
    return response;
  }
  async teAnyadido(te){
    let response = await this.http.post('/api/admin/tea',{te},{headers:{"Content-Type":"application/json"}}).toPromise();
    return response;
  }
  async todosLosTes(){
    let response:any = await this.http.get('/api/cargar/losmasvendidos')
    .toPromise();
    // console.log(response.datos);
    return response.datos;
  }
}
