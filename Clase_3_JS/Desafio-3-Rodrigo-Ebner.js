//While aplicado a concurso por número ganador
var ingresaNumero = prompt("Ingresa un numero del 1 al 10, sólo hay uno ganador...");
    
while(ingresaNumero != 6){
    ingresaNumero++; // Mientras el número sea distinto de 6 sigue intentando
    console.log("Perdiste, el número: " + (ingresaNumero - 1) + " no tiene premio, vuelve a intentarlo");
   
    if(ingresaNumero = 6){
        break; //Detiene ciclo y lanza ganador
    }
    console.log("Felicitaciones, hoy es tu día de suerte!" + ingresaNumero + "es correcto")
}