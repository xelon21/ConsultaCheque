import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-estado-cliente',
  templateUrl: './dialog-estado-cliente.component.html',
  styles: [`
  .colorTabla {
    background-color: #3D5AFE;   
  }

  .tamanio{
    width: 50vw;
  }

  `]
})
export class DialogEstadoClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cliente(){
    Swal.fire('Cliente: no existe Cliente.')
  }

}
