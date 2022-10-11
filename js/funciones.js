

      let comentario = document.querySelector("footer > p");
      comentario.innerHTML = "opcion conversion de errores";
     

alert(caja.value)

     
 
      caja.addEventListener("keyup", escribirChino,false);
 
      function escribirChino(evento){
       
        if ( evento.keyCode==8){return}//para cuando pulse la tecla borrar funcione
        let palabra=caja.value;

        if( evento.keyCode<65 ||  evento.keyCode>90){  //cambiar solo las letras
          palabra=palabra.substring(0,palabra.length-1)
         caja.value=palabra;
          return;
        }
        
        palabra=palabra.toUpperCase();//lo convierte en mayusculas
        let nc=palabra.length-1;
         
        let carcodigodeletra=palabra.charCodeAt(nc);              
       
        let chino =unescape("%u"+carcodigodeletra+"e8");//ya tenemos el caracter chino
        
        palabra=palabra.substring(0,nc)+chino;//coje el primer caracter hasta el que tenemos ya codificado
        caja.value=palabra;

      }


  
