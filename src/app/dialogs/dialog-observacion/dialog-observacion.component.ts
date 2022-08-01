import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../consultacheques/pages/consulta/consulta.component';

@Component({
  selector: 'app-dialog-observacion',
  templateUrl: './dialog-observacion.component.html',
  styles: [`
  
.colorTabla {
    background-color: #3D5AFE;
    
}

  `
  ]
})
export class DialogObservacionComponent implements OnInit {
  
  obs!: string; 
  
  constructor( public dialogRef: MatDialogRef<DialogObservacionComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit(): void {
  }

  envioObservacion(){
    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
