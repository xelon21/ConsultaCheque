import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

import { HomeComponent } from '../home/home.component';
import { WardGuard } from '../guards/ward.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [      
      { path: 'consulta', component: ConsultaComponent},
      
      { path: 'formulario', component: FormularioComponent },
      
      { path: '**', redirectTo: 'consulta'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  //exports: [RouterModule]
})
export class ConsultachequesRoutingModule { }
