import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultachequesRoutingModule } from './consultacheques-routing.module';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ConsultaComponent,
    FormularioComponent,
  
  ],
  imports: [
    CommonModule,
    ConsultachequesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class ConsultachequesModule { }
