import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../Interfaces/interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';



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
  ],
  
})
export class FormularioComponent implements OnInit {

  datos: Country[] = [];
  termino!: string;


  fecha = new FormGroup({
    fechaCheque: new FormControl()    
  });

  

  consultaCheque: FormGroup = this.fb.group({
    observacion: '',
    estadoClave: '',
    numeroConsulta: '',
    claveCliente:'',
    banco: '',
    cuentaCorriente: '',
    montoCompra: '',
    rutGirador: '',
    titular: '',
    fonoReferencia1: '',
    fonoReferencia2: '',
    observacionTelefono1: '',
    observacionTelefono2: '', 
    numeroCheque: '',
    monto: '', 
    observacionConsulta: '',
    inputBanco: '',
    rubroComercio: '',
    fechaCheque: '',

  })

  constructor( private datosService: ConsultaService,
               private activateRoute: ActivatedRoute,
               private fb: FormBuilder ) { }

  ngOnInit(): void {
  


  }


  detalle(){
   
Swal.fire({
  title: 'Esta Persona posee 50 mil protestos',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
  }

  cliente() {
    Swal.fire('Cliente: No hay cliente')
  }
  

  buscar(){
    console.log(this.termino)
    this.datosService.buscarPais(this.termino)
      .subscribe( (resp) => {
        this.datos = resp;
        console.log(resp)
      })
  }

  
}