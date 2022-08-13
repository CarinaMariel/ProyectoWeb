import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  //creamos variable de tipo cualquiera, para guardar los datos entrantes
  miPorfolio:any;

  constructor(private datosPorfolio:PortfolioService) { }

  /*miNombre:string="Carina Mariel Strada";
  miTitulo:string="Licenciada en Matematica Aplicada";
  datosInfProfesional:string="blaaaaaaaaaaaaaaaaaaaaa";*/
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miPorfolio=data;
      console.log(this.miPorfolio);
    });
  }
}
