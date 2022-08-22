import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../consultacheques/Interfaces/usuario';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseUrl = `http://10.0.0.30:4000/api/usuarios/autorizar/`
  private _usuario!: Usuario
/** Metodo que permite que un usuario pueda ingresar a la aplicacion */
loginUsuario(email: string, password: string) {

  const url = `${this.baseUrl}/login`;
  const body = { email, password, };

  return this.http.post<Usuario>(url , body )
      .pipe(
          tap( resp => {   
            console.log(resp)                                         
          if( resp ) {
            localStorage.setItem('ApiKey', resp.apiKey!)
            this._usuario = resp                         
            
          }
        } ),
          map( resp => {                                          
            return resp;
          }),
          catchError( err => of(false) )
      )
}
  
}
