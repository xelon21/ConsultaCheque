import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';
import { WardGuard } from './guards/ward.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./consultacheques/consultacheques.module').then(m => m.ConsultachequesModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [WardGuard],
    canLoad: [WardGuard]
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }