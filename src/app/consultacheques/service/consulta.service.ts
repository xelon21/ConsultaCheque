import { HttpClient, HttpHeaderResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { tap } from 'rxjs/operators';
import { Cliente } from "../Interfaces/consutlaCheques.interface";
import { Country } from "../Interfaces/interface";


@Injectable({
    providedIn: 'root'
  })
  
  export class ConsultaService { 


    constructor( private http: HttpClient){}   


    validaIngresoGuard() {
         return of(true)
    }


  }
