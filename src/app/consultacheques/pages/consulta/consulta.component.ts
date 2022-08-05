import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Dialog1Component } from 'src/app/dialogs/dialog1/dialog1.component';
import Swal from 'sweetalert2';
import { Cliente } from '../../Interfaces/consutlaCheques.interface';
import { ConsultaService } from '../../service/consulta.service';
import { DialogObservacionComponent } from '../../../dialogs/dialog-observacion/dialog-observacion.component';
import { DialogEstadoClienteComponent } from '../../../dialogs/dialog-estado-cliente/dialog-estado-cliente.component';
import { CargaScriptsService } from '../../../carga-scripts.service';

import * as vrut from 'jquery';
import { SnipperComponent } from '../../../dialogs/snipper/snipper.component';
import { AgregarRepresentanteLegalComponent } from 'src/app/dialogs/agregar-representante-legal/agregar-representante-legal.component';
import { ValidacionrutService } from '../../../helpers/validacionrut.service';

export const v = vrut;


declare var $: any; 
//declare function Valida_Rut(rut:any): any;


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

.inputPequeno{
  width: 4vw;
  margin-left: -20%;
}
.bordes {
  border-style: groove;
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
  margin-top: 2%;
  margin-left: 6%;
}
  `
  ]
})
export class ConsultaComponent implements OnInit {

  tabla1: boolean = false;

  alertaObservacion: boolean = true;
  clientex: Cliente[] = [];
  detalleCargado: number = 1;
  detalleCli: number  = 1;
  // detalleCargadop: boolean = false;
  // morosidad: boolean = false;
  
  rExpresion = "([0-9.-]*)([k]?)";
  obs: string = '';
  estadoClave: string = 'No Activo';
  numeroConsulta: number = 0;
  
  fecha = new FormGroup({
    fechaCheque: new FormControl()    
  });

  consultaCheque: FormGroup = this.fb.group({
    observacion: [,[Validators.maxLength(200),Validators.minLength(10), Validators.required ]],
    claveCliente:[,[Validators.required, Validators.minLength(4)]],
    banco: [,[Validators.required, Validators.min(0)]],
    cuentaCorriente: [,[Validators.required, Validators.min(0)]],
    montoCompra: [,[Validators.required, Validators.min(0)]],
    rutGirador: [ , [ Validators.required, Validators.pattern(this.rExpresion), Validators.maxLength(13) ] ],
    titular:  [,[Validators.required, Validators.minLength(4)]],
    telefono1: [,[Validators.required, Validators.min(0)]],
    telefono2: [,[Validators.required, Validators.min(0)]],
    numeroCheque: [,[Validators.required, Validators.min(0)]],
    monto: [,[Validators.required, Validators.min(0)]],
    observacionConsulta:  [ ,[Validators.required, Validators.minLength(4)]], 
  })

  run: string = '';
  cambioRut: string | number = "";   
  rutBack2: string | number = "";

  esValido: boolean = true;
  rutValido = false;
  representante: number = 1;

  constructor( private datosService: ConsultaService,    
    private dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private carga: CargaScriptsService,
    private valrut: ValidacionrutService) { 

      carga.Carga(["jquery.rut"])
      
    }

  ngOnInit() {     
   
    $(document).ready( () => {
    
      $("input#rut").rut({formatOn: 'keyup', ignoreControlKeys: false, minimumLength: 8, validateOn: 'change' });      
      
      $("#esconder").hide(1000);

    })

    this.datosService.mostrarclientes()
      .subscribe( datos => {
        this.clientex = datos;
    })
  }

  openDialog(  ) {    
    
    this.dialog.open(Dialog1Component, {
      data: this.clientex ,
    }); 
    
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
  agregarRepresentante(){
    Swal.fire({
      title: 'El Girador ingresado no posee representante legal, desea agregar uno?',
      showDenyButton: true,    
      denyButtonText: `No agregar`,
      confirmButtonText: 'Agregar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.dialog.open(AgregarRepresentanteLegalComponent)
      } else if (result.isDenied) {
        Swal.fire('No se ha agregado un representante legal')
      }
    })
  }

  agregarObservacion() {

    const dialogRef =  this.dialog.open(DialogObservacionComponent,
      {
        width: '450px',
        data:  this.obs
      });

    dialogRef.afterClosed().subscribe( respuesta => {
        console.log(respuesta)
        this.obs = respuesta;       
        console.log( this.obs)
        this.consultaCheque.controls['observacionConsulta'].setValue(this.obs);
        this.alertaObservacion = false; 
        
    }) 

  }

  cliente() {
    Swal.fire('Cliente: No hay cliente')
  }

  agregarCheque(){    
   
  } 

  
  campoFecha: boolean = false;
  respuestaRut(){   
    try {
      if (this.fecha.controls['fechaCheque'].value._isValid){
        this.campoFecha = true;
        console.log(this.fecha.controls['fechaCheque'].value._isValid);
        console.log(this.consultaCheque.value);
      }
      
    } catch (error) {    
      Swal.fire('Debe ingresar una fecha')
    }  
    
  }

  garantizar() {
    Swal.fire('Garantizado')
    // Validacion campo fecha***    
      
  }
  
  eliminar() {
    Swal.fire('Eliminado el cheque')
  }

  nuevaConsulta(){
    Swal.fire('Se genera nueva consulta......')
    
  }
 

  rutaverificar: any;

  validacionRut(){   
     
    this.rutaverificar = this.valrut.validarRut(this.consultaCheque.controls['rutGirador'].value)
    if (this.rutaverificar === 0 || this.rutaverificar === 1) {
      this.esValido = true;
      this.rutValido = false; 
    }else {      
      this.esValido = false;
      this.rutValido = true;
    }

  }


     
}

