//Desafío 2 Rod Ebner - Algoritmo con condicional.
//Se pide Nombre y edad y se valida mayoría de edad para aceptar.
//Si es mayor de edad, se da acceso y mensaje de bienvenida.
//Si no es mayor de edad, se niega acceso y se da mensaje con cálculo de cuanto falta para cumplir mayoría de eded.

//Definición de variables del algoritmo
var ingresaNombre = prompt("Ingresa tu nombre...");
var ingresaEdad = prompt("Ingresa tu edad...");
var mayorEdad = (ingresaEdad >= 18);

//Condición de ingreso en base a IF y uso de operador lógico - en false.
if(mayorEdad){
    console.log("Gracias por ingresar " + ingresaNombre + ", ya eres parte del equipo!");
} else {
    console.log("Lo sentimos " + ingresaNombre + ", necesitas ser mayor de edad para ingresar" + ". Pero no te preocupes, sólo faltan " + (18 - ingresaEdad) + " años, y podrás estar dentro ;)");
}