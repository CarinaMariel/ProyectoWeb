import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  
  //creamos variable de tipo cualquiera, para guardar los datos entrantes
  miDataPorfolio:any;

  //miFotoPresentacion:string="/assets/Imagenes/fotopresentacion.png";
  //miFotoPerfil:string="/assets/Imagenes/fotoPerfil3.jpg";

  //constructor() { }
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miDataPorfolio=data;
    });
  }
}
