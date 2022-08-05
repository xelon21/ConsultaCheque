import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CargaScriptsService } from './carga-scripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Dialog1Component } from './dialogs/dialog1/dialog1.component';
import { DialogObservacionComponent } from './dialogs/dialog-observacion/dialog-observacion.component';
import { DialogEstadoClienteComponent } from './dialogs/dialog-estado-cliente/dialog-estado-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SnipperComponent } from './dialogs/snipper/snipper.component';
import { LoginComponent } from './login/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarRepresentanteLegalComponent } from './dialogs/agregar-representante-legal/agregar-representante-legal.component';



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    ErrorComponent, 
    Dialog1Component,
    DialogObservacionComponent,
    DialogEstadoClienteComponent,
    SnipperComponent,
    LoginComponent,
    AgregarRepresentanteLegalComponent,

   
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [
    CargaScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
