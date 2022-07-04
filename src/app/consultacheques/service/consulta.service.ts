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

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor( private http: HttpClient){}
    
    get httpParams () {
        return new HttpParams()
              .set( 'fields', 'name,capital,cca2,flags,population,area' )    
      }

    mostrarclientes(): Observable<Cliente[]> {
      const url = `http://localhost:4000/api/pruebas/mostrar`

      return this.http.get<Cliente[]>(url);

    }
    
    
    buscarPais( termino: string ): Observable<Country[]> {
    
        const url = `${ this.apiUrl }/name/${ termino }`;
    
        return this.http.get<Country[]>( url, {params: this.httpParams} );
                  
      }

    validaIngresoGuard() {
         return of(true)
    }


  }
