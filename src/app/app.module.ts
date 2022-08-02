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
import { FormsModule } from '@angular/forms';
import { SnipperComponent } from './dialogs/snipper/snipper.component';



@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    ErrorComponent, 
    Dialog1Component,
    DialogObservacionComponent,
    DialogEstadoClienteComponent,
    SnipperComponent,    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CargaScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
