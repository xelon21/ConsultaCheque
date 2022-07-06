import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Dialog1Component } from 'src/app/dialogs/dialog1/dialog1.component';
import Swal from 'sweetalert2';
import { Cliente } from '../../Interfaces/consutlaCheques.interface';
import { ConsultaService } from '../../service/consulta.service';
import { DialogObservacionComponent } from '../../../dialogs/dialog-observacion/dialog-observacion.component';
import { DialogEstadoClienteComponent } from '../../../dialogs/dialog-estado-cliente/dialog-estado-cliente.component';

export interface DialogData {
  protesto: 'Si' | 'No' ;
  chequesValidados: '150' | '1' | '10';
  chequesNoValidos: '64' | '5' | '0';
  morosidad: 'alta'| 'media' | 'baja'; 
  cliente: 'SalmonStack' | 'Kyo Verduleria' | 'Zapato Constructora';
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: [`
  .altito{
  margin-bottom: 1.5vw;
}

.botonBordeIzquierda{
    margin-left: 5vw;
    margin-bottom: 1.5vw;
}


.aprobado {
    background-color: #00BC37;
    
}

.rechazado {
    background-color: #F0220E;
    
}
.botonBordeIzquierda2{
  margin-left: 2vw;
}

.colorTabla {
    background-color: #3D5AFE;
    
}

.divGris{
  height: 6vw;
}


.botoncito{
  width: 25vw;
}

.botonBordeIzquierda4{
  margin-left: 3vw;

}

.modal-backdrop {
  z-index: -1;
}

.tamanio{
  width: 23vw;
  margin-top: 1.5%;
}
  `
  ]
})
export class ConsultaComponent implements OnInit {

  tabla1: boolean = false;

  contadorObs: boolean = false;
  cuentaObs: number = 0;

  alertaObservacion: boolean = true;
  termino!: string;

  clientex: Cliente[] = [];


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

    this.datosService.mostrarclientes()
      .subscribe( datos => {
        this.clientex = datos;
      })

  }

  openDialog(  ) {    

    this.dialog.open(Dialog1Component, {
      data: this.clientex ,
    });


    // this.dialog.open(Dialog1Component);

    // const dialogRef = this.dialog.open(Dialog1Component);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  detalleCliente() {
    this.dialog.open(DialogEstadoClienteComponent)
  }


  detalle(){
  
    this.tabla1 = true;
    
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

  agregarObservacion() {
    
    this.dialog.open(DialogObservacionComponent, {
      data: this.clientex ,
    });

    this.alertaObservacion = false;
    this.contadorObs = true;
    this.cuentaObs ++;
    

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

  // buscar(){
  //   console.log(this.termino)
  //   this.datosService.buscarPais(this.termino)
  //     .subscribe( (resp) => {
  //       this.datos = resp;
  //       console.log(resp)
  //     })
  // }

  
}
