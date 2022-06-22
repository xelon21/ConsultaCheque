import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Pokeapi, Poke } from '../Interfaces/interface';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  
  export class ConsultaService { 

    private apiUrl: string = 'https://pokeapi.co/api/v2';

    constructor( private http: HttpClient){}

    
    getDatos(): Observable<Pokeapi[]> {
        return this.http.get<Pokeapi[]>('https://pokeapi.co/api/v2/pokemon/')
    }

    getDatos2(): Observable<Pokeapi[]> {
        const url = `${ this.apiUrl }/pokemon/`

        return this.http.get<Pokeapi[]>(url)
    }

    getBuscador( termino: string ): Observable<any> {

        const url = `${ this.apiUrl }/pokemon/${ termino }`

        return this.http.get( url )

    }

  }
