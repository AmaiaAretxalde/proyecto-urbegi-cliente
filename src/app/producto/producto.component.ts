import { Component, OnInit } from '@angular/core';
import { CargarService } from '../cargar.service';
import { ComprarService } from '../comprar.service';
import { ModificarService } from '../modificar.service';

import { LoginService } from '../login.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any;
  id: string;
  nombre: string;
  descripcion: string;
  longDescription: string[] = [];
  unidades: number;
  precio: number;
  precioTotal: number;
  iconoAroma: string;
  aroma: string;
  iconoSabor: string;
  sabor: string;
  iconoColor: string;
  color: string;
  src: string;
  mounted:boolean = false;
  userIsAdmin:boolean = false;

  shortDescription:string;

  constructor(public cargarService: CargarService, public comprarService: ComprarService,private modificarService:ModificarService,private loginservice: LoginService ,private router: Router) { }


  async ngOnInit() {

    console.log(this.mounted)
    this.id = await this.cargarService.pasarId();
    this.producto = await this.cargarService.cargarInfoProducto(this.id);
    console.log(this.producto);
    if (this.producto.mensaje ==="404") {
      this.router.navigate(['../error404']);
    } else {
      this.src = this.producto[0].mainImage;
      this.nombre = this.producto[0].name;
      this.precio = this.producto[0].basePrice
      this.descripcion = this.producto[0].descripcion;
      this.longDescription = this.producto[0].longDescription;
      this.precioTotal = Math.floor(this.unidades * this.precio / 100) * 100;
      this.iconoAroma = this.producto[0].caracteristicas.aroma.image;
      this.aroma = this.producto[0].caracteristicas.aroma.texto;
      this.iconoSabor = this.producto[0].caracteristicas.sabor.image;
      this.sabor = this.producto[0].caracteristicas.sabor.texto;
      this.iconoColor = this.producto[0].caracteristicas.color.image;
      this.color = this.producto[0].caracteristicas.color.texto;
      this.mounted = true;
      this.userIsAdmin= this.loginservice.checkIsAdmin()
      console.log(this)
      console.log(this.mounted)
    }
  }

  async anyadirACestaDesdeProducto() {

    let productoAnyadido=  await this.comprarService.anyadirALaCesta(this.producto[0], this.unidades);
  }

  async modificarProducto(){
    
    this.router.navigate(['modificar-producto/'+ this.id])
    //this.router.navigate(['/input-admin'])

  }

  llamarSnackbar(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
