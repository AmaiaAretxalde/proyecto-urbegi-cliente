import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infusiones',
  templateUrl: './infusiones.component.html',
  styleUrls: ['./infusiones.component.css']
})
export class InfusionesComponent implements OnInit {
  color:string = "Infusión";
  constructor( public router:Router) { }

  ngOnInit() {
  }

}
