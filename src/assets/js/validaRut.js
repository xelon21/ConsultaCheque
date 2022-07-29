// function dgv(T)    //digito verificador
// {  
//       var M=0,S=1;
// 	  for(;T;T=Math.floor(T/10))
//       S=(S+T%10*(9-M++%6))%11;
// 	  //return S?S-1:'k';
      
//       alert(S?S-1:'k');
//  }

 function Valida_Rut( Objeto )
{
	var tmpstr = "";
	var intlargo = Objeto.value
	if (intlargo.length> 0)
	{
		crut = Objeto.value
		largo = crut.length;
		if ( largo <2 )
		{
			alert('rut inválido')
			Objeto.focus()
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		suma = 0;
		mul  = 2;
 
		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
			alert('El Rut Ingreso es Invalido')
			Objeto.focus()
			return false;
		}
		alert('El Rut Ingresado es Correcto!')
		Objeto.focus()
		return true;
	}
}
// var Fn = {
// 	// Valida el rut con su cadena completa "XXXXXXXX-X"
// 	validaRut : function (rutCompleto) {
// 		rutCompleto = rutCompleto.replace("‐","-");
// 		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
// 			return false;
// 		var tmp 	= rutCompleto.split('-');
// 		var digv	= tmp[1]; 
// 		var rut 	= tmp[0];
// 		if ( digv == 'K' ) digv = 'k' ;
		
// 		return (Fn.dv(rut) == digv );
// 	},
// 	dv : function(T){
// 		var M=0,S=1;
// 		for(;T;T=Math.floor(T/10))
// 			S=(S+T%10*(9-M++%6))%11;
// 		return S?S-1:'k';
// 	}
// }


// $("#btnvalida").click(function(){
// 	if (Fn.validaRut( $("#txt_rut").val() )){
// 		$("#msgerror").html("El rut ingresado es válido :D");
// 	} else {
// 		$("#msgerror").html("El Rut no es válido :'( ");
// 	}
// });