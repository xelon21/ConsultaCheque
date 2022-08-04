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
  
  fecha = new FormGroup({
    fechaCheque: new FormControl()    
  });

  consultaCheque: FormGroup = this.fb.group({
    observacion: [,[Validators.maxLength(200),Validators.minLength(10), Validators.required ]],
    estadoClave: [,[Validators.required, Validators.minLength(4)]],
    numeroConsulta: [,[Validators.required, Validators.min(0)]],
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
    private carga: CargaScriptsService) { 

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
 

  validacionRut(){   
     
    switch (this.validarRut(this.consultaCheque.controls['rutGirador'].value)) {
      case 0: 
      this.esValido = true;
      this.rutValido = false; 
        break;      
      case 1:
      this.esValido = true;
      this.rutValido = false;     
      break;    
      default:       
        break;
    }
    if(this.rutValido){
      this.detalleCargado = 2;
      this.detalleCli = 2; 
      this.representante = 2     
    }else {    
      this.detalleCargado = 1;
      this.detalleCli = 1;
      this.representante = 1;
    }

  }

//#region Variables y metodo validarRut
  suma: string | number = 0;
  largo!: number;
  crut!: string;
  dv! : string;
  mul!: number;
  res!: number;
  dvi!: number;
  rutBack!: any;
  
  // Metodo para validar Rut
  validarRut(rut: string ) { 
    
    var tmpstr = "";
    var intlargo = rut
    if (intlargo.length> 0)
    {
      this.crut = rut
      this.largo = this.crut.length;
      
      if ( this.largo <2 )
      {
        //alert('rut inválido')
        this.esValido = true;
        return this.rutValido = false;			
      }    
      for (let i=0; i <this.crut.length ; i++ )
      if ( this.crut.charAt(i) != ' ' && this.crut.charAt(i) != '.' && this.crut.charAt(i) != '-' )
		{
      tmpstr = tmpstr + this.crut.charAt(i);     
		}
		rut = tmpstr;
		this.crut=tmpstr;
		this.largo = this.crut.length;
 
		if ( this.largo> 2 ){
      rut = this.crut.substring(0, this.largo - 1);      
    }else{
			rut = this.crut.charAt(0);      
    }
    
		this.dv = this.crut.charAt(this.largo-1); 
    
		if ( rut == null || this.dv == null ){      
      return 0;
    }     
    
		var dvr = '0';
		this.suma = 0;
		this.mul  = 2; 
    this.rutBack = rut;
		for (let i= rut.length-1 ; i>= 0; i--)
		{
      this.suma = this.suma + this.rutBack.charAt(i) * this.mul;
			if (this.mul == 7)
      this.mul = 2;
			else
      this.mul++;      
		}
    
		this.res = this.suma % 11;
    
		if (this.res==1)
    dvr = 'k';
		else if (this.res==0)
    dvr = '0';
		else
		{
			this.dvi = 11-this.res;
			dvr = this.dvi + "";
		}
    
		if ( dvr != this.dv.toLowerCase() )
		{			 
      return 1;
		}		
		this.esValido = false;
    this.rutValido = true;   
	}else {
    this.esValido = true;
    this.rutValido = false;   
  }
  return;
  //#endregion
 
}
     
}

