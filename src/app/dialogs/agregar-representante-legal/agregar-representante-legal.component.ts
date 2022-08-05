import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CargaScriptsService } from 'src/app/carga-scripts.service';
import Swal from 'sweetalert2';
import { ValidacionrutService } from '../../helpers/validacionrut.service';

declare var $: any; 

@Component({
  selector: 'app-agregar-representante-legal',
  templateUrl: './agregar-representante-legal.component.html',
  styles: [`
  
  `]
})
export class AgregarRepresentanteLegalComponent implements OnInit {
  
  rExpresion = "([0-9.-]*)([k]?)";
  esValido: boolean = true;
  rutValido: boolean = false;


  addRepresentante: FormGroup = this.fb.group({
    rutRepresentante: [ , [ Validators.required, Validators.pattern(this.rExpresion), Validators.maxLength(13) ] ],
    telefonoRepresentante: [,[Validators.min(0), Validators.required ]],
    otroDato: [,[Validators.maxLength(200),Validators.minLength(2), Validators.required ]],
  })

  constructor(private fb: FormBuilder,
              private carga: CargaScriptsService,
              private rut: ValidacionrutService) { 

    carga.Carga(["jquery.rut"])
    
  }

  ngOnInit(): void {
    
    $(document).ready( () => {
    
      $("input#rut").rut({formatOn: 'keyup', ignoreControlKeys: false, minimumLength: 8, validateOn: 'change' });      

    })
  }

  ingresarRepresentante(){
    Swal.fire('Se ha agregado un representante legal');   
  }

  rutaverificar: any;

  validacionRut(){
   
    this.rutaverificar = this.rut.validarRut(this.addRepresentante.controls['rutRepresentante'].value)
    if (this.rutaverificar === 0 || this.rutaverificar === 1) {
      this.esValido = true;
      this.rutValido = false; 
    }else {      
      this.esValido = false;
      this.rutValido = true;
    }
  }  
}
