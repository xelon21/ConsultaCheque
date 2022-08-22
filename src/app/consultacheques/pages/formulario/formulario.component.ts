import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../../service/consulta.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../Interfaces/interface';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { Dialog1Component } from '../../../dialogs/dialog1/dialog1.component';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [`

.altito{
  margin-bottom: 1.5vw;
}

.botonBordeIzquierda{
    margin-left: 5vw;
    margin-bottom: 1.5vw;
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

.modal-backdrop {
  z-index: -1;
}

.tamanio{
  width: 17vw;
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
               private dialog: MatDialog,
               private activateRoute: ActivatedRoute,
               private fb: FormBuilder ) { }

  ngOnInit(): void {
  


  }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog1Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

  agregarCheque(){
    Swal.fire('Debe ingresar datos')
  }

  respuestaRut(){
    Swal.fire('No hay rut en el sistema')
  }

  garantizar() {
    Swal.fire('Garantizado')
  }
  
  eliminar() {
    Swal.fire('Eliminado el cheque')
  }

  nuevaConsulta(){
    Swal.fire('Se genera nueva consulta......')
  }

  buscar(){
    // console.log(this.termino)
    // this.datosService.buscarPais(this.termino)
    //   .subscribe( (resp) => {
    //     this.datos = resp;
    //     console.log(resp)
    //   })
  }

  
}