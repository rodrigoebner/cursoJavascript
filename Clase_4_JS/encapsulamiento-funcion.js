//Encapsulamiento de código en una Función
function Desafio(){
    var ingresaNombre = prompt("Ingresa tu nombre...");
    var ingresaEdad = prompt("Ingresa tu edad...");
    var mayorEdad = (ingresaEdad >= 18);
    
    if(mayorEdad){
        console.log("Gracias por ingresar " + ingresaNombre + ", ya eres parte del equipo!");
    } else {
        console.log("Lo sentimos " + ingresaNombre + ", necesitas ser mayor de edad para ingresar" + ". Pero no te preocupes, sólo faltan " + (18 - ingresaEdad) + " años, y podrás estar dentro ;)");
    }
}