import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ConsultaService } from '../consultacheques/service/consulta.service';

@Injectable({
  providedIn: 'root'
})
export class WardGuard implements CanActivate, CanLoad {

  constructor( private consultaService: ConsultaService,
               private router: Router ) {

  }
  canActivate(): Observable<boolean> | boolean {  
    return this.consultaService.validaIngresoGuard()
            .pipe( 
              tap( valid => {
                if(!valid) {
                  this.router.navigateByUrl('/consulta')
                } 
              })
            );
  }
  canLoad(): Observable<boolean> | boolean {  
    return this.consultaService.validaIngresoGuard()
              .pipe( 
                tap( valid => {
                  if(!valid) {
                    this.router.navigateByUrl('/consulta')
                  }
                })
              );
  }
}
