import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/consultacheques/pages/consulta/consulta.component';
import { Cliente } from '../../consultacheques/Interfaces/consutlaCheques.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styles: [`
  .colorTabla {
    background-color: #3D5AFE;
    
}

.consultado {
  background-color: #CCE5FF;
}


.aprobado {
    background-color: #00BC37;
    
}

.rechazado {
    background-color: #F0220E;
    
}
.tamanioVentana{
  width: 70vw;
  height: 50vw;  

}
  `]
})
export class Dialog1Component implements OnInit {


  cliente: Cliente[] = [];
  spiner: boolean = true;



  constructor(@Inject(MAT_DIALOG_DATA) public data: Cliente[]) { }

  ngOnInit(): void {

   // this.spiner = false;
   this.pruebas();  
  }

  pruebas(){
    try {
      
      if (this.spiner){
        this.spiner = false;
      }
    } catch (error) {
      
    }
  }

  detalle() {
    Swal.fire(' Cliente no apto')
  }
  
}
