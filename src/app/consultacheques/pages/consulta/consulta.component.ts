import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Dialog1Component } from 'src/app/dialogs/dialog1/dialog1.component';
import Swal from 'sweetalert2';
import { Cliente } from '../../Interfaces/consutlaCheques.interface';
import { ConsultaService } from '../../service/consulta.service';
import { DialogObservacionComponent } from '../../../dialogs/dialog-observacion/dialog-observacion.component';
import { DialogEstadoClienteComponent } from '../../../dialogs/dialog-estado-cliente/dialog-estado-cliente.component';
import { CargaScriptsService } from '../../../carga-scripts.service';

import * as vrut from 'jquery';

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
    observacion: ['',[Validators.required, Validators.maxLength(12)]],
    estadoClave: ['',[Validators.required]],
    numeroConsulta: [0,[Validators.required]],
    claveCliente:[0,[Validators.required]],
    banco: [0,[Validators.required]],
    cuentaCorriente: [0,[Validators.required]],
    montoCompra: [0,[Validators.required]],
    run: [ '', [ Validators.required, Validators.pattern("^[0-9]+[k]"), Validators.maxLength(12) ] ],
    titular:  ['',[Validators.required]],
    fonoReferencia1: [0,[Validators.required]],
    fonoReferencia2: [0,[Validators.required]],
    numeroCheque: [0,[Validators.required]],
    monto: [0,[Validators.required]],
    observacionConsulta:  ['',[Validators.required]],
    inputBanco: [0,[Validators.required]],
    rubroComercio:  ['',[Validators.required]],
    fechaCheque:  ['',[Validators.required]],
  })

  run: string = '';
  cambioRut: string | number = "";
  
  contador: any = "";
  digito: string = "";
  numero = 0;

  rutBack2: string | number = "";
  rExpresion = "^[0-9]+[k]";
  esValido: boolean = true;
  rutValido = false;



  constructor( private datosService: ConsultaService,    
    private dialog: MatDialog,
    private activateRoute: ActivatedRoute,
    private fb: FormBuilder,
    private carga: CargaScriptsService) { 

      carga.Carga(["jquery.rut"])
      
    }

   

    name = 'Jquery Integration With Angular!';  
     isJqueryWorking: any;  


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

   async agregarObservacion() {

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Ingrese Su Observacion',
      inputPlaceholder: '',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    
    if (text) {
      Swal.fire('Observacion: ', text)
    }
 
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

  validacionRut(){ 
 
    switch (this.validarRut(this.consultaCheque.controls['run'].value)) {
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


    //this.consultaCheque.setValue(this.run); 

  }

 
  suma: string | number = 0;
  largo!: number;
  crut!: string;
  dv! : string;
  mul!: number;
  res!: number;
  dvi!: number;
  rutBack!: any; 

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
  
  }
     
}

