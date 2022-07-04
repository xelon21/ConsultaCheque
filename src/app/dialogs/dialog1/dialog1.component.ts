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
.tamanioVentana{
  width: 70vw;  

}
  `]
})
export class Dialog1Component implements OnInit {

  cliente: Cliente[] = [];



  constructor(@Inject(MAT_DIALOG_DATA) public data: Cliente[]) { }

  ngOnInit(): void {
  
  }

  detalle() {
    Swal.fire(' Cliente no apto')
  }
  
}
