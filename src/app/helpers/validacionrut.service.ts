import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionrutService {

  constructor() { }  

  //#region Variables de validacion de rut
  suma: string | number = 0;
  largo!: number;
  crut!: string;
  dv! : string;
  mul!: number;
  res!: number;
  dvi!: number;
  rutBack!: any;
  //#endregion

  validarRut(rut: string ) { 
    
    var tmpstr = "";
    var intlargo = rut
    if (intlargo.length> 0)
    {
      this.crut = rut
      this.largo = this.crut.length;
      
      if ( this.largo <2 )
      {
        return 0;			
      }    
      for (let i=0; i <this.crut.length ; i++ )
      if ( this.crut.charAt(i) != ' ' && this.crut.charAt(i) != '.' && this.crut.charAt(i) != '-' )
      {
        tmpstr = tmpstr + this.crut.charAt(i);     
      }
		rut = tmpstr;
		this.crut=tmpstr;
		this.largo = this.crut.length;
 
      if ( this.largo> 2 ){
        rut = this.crut.substring(0, this.largo - 1);      
      }else{
        rut = this.crut.charAt(0);      
      }
    
		this.dv = this.crut.charAt(this.largo-1); 
    
      if ( rut == null || this.dv == null ){      
        return 0;
      }     
      
		var dvr = '0';
		this.suma = 0;
		this.mul  = 2; 
    this.rutBack = rut;
      for (let i= rut.length-1 ; i>= 0; i--)
      {
        this.suma = this.suma + this.rutBack.charAt(i) * this.mul;
        if (this.mul == 7)
        this.mul = 2;
        else
        this.mul++;      
      }
    
		this.res = this.suma % 11;
    
      if (this.res==1)
      dvr = 'k';
      else if (this.res==0)
      dvr = '0';
      else
      {
        this.dvi = 11-this.res;
        dvr = this.dvi + "";
      }
    
      if ( dvr != this.dv.toLowerCase() )
      {			 
        return 0;
      }				
    return 2
    }else {
      return 0;
    }
  
  //#endregion 
  }

}
