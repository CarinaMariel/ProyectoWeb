import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  constructor() { }

  miNombre:string="Carina Mariel Strada";
  miTitulo:string="Licenciada en Matematica Aplicada";
  datosInfProfesional:string="blaaaaaaaaaaaaaaaaaaaaa";

  
  ngOnInit(): void {
  }

}
