import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { tap } from 'rxjs/operators';
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
    
    
    buscarPais( termino: string ): Observable<Country[]> {
    
        const url = `${ this.apiUrl }/name/${ termino }`;
    
        return this.http.get<Country[]>( url, {params: this.httpParams} );
                  
      }

  }
