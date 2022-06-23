import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokeapi, Result } from '../Interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaChequeService {

  constructor(private http: HttpClient) { }

  getDatos(): Observable<Pokeapi[]> {
    return this.http.get<Pokeapi[]>('https://pokeapi.co/api/v2/pokemon/')
}

getDatos2(): Observable<Result[]> {
    return this.http.get<Result[]>('https://pokeapi.co/api/v2/pokemon/')
}
}
