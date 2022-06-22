import { Component, OnInit } from '@angular/core';
import { Pokeapi, Poke } from '../../Interfaces/interface';
import { ConsultaService } from '../../service/consulta.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`

.botonBordeIzquierda{
    margin-left: 5vw;
}
.colorTabla {
    background-color: #3D5AFE;
    
}
.botonBordeIzquierda2{
  margin-left: 2vw;

}

.botonBordeIzquierda4{
  margin-left: 3vw;

}

  `
  ]
})
export class FormularioComponent implements OnInit {

  datos: Pokeapi[] = [];
  muestraDatos!: Pokeapi[];
  termino!: string;

  constructor( private datosService: ConsultaService,
               private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.muestra();

    
    
  }

  buscar(){
    console.log(this.termino)
    this.datosService.getBuscador(this.termino)
      .subscribe( (resp) => {
        console.log(resp)
      })
  }

  muestra(){
 
    this.datosService.getDatos()
    .subscribe(datos => {
      this.datos = datos     
      console.log('datos: ', this.datos)
    })

    this.datosService.getDatos2()  
    .subscribe((datos) => {
     console.log(datos);

    this.muestraDatos = datos;
    console.log(this.muestraDatos)

    //console.log('Muestra Datos: ', this.muestraDatos)
    })

  
  } 

}