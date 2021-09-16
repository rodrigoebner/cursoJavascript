//Simulador de Modelo de negocio - desafío 4 Rodrigo Ebner

/*descripción del simulador: En base a la combinatoria de diversas variables se procesa la información ingresada 
por el usuario, convirtiendo los valores ingresados en parámetros 0 y 1, con esto se genera un cálculo el cual
dependiendo del valor de resultado imprimirá una recomendación para el modelo de negocio */

//Descripción de variables del modelo
var ticketMedio = prompt("¿Cuánto es el ticket medio de compra? (ingresa un valor pensando en Dólares)");
var competencia = prompt("¿Hay muchos competidores o pocos que ofrecen lo mismo que tu? (Ingresa muchos o pocos)");
var inversionInicial = prompt("¿Cuánto dinero necesitas para iniciar tu negocio, más o menos de 10 mil dólares? (Ingresa mas o menos)");
var rotacionConsumo = prompt("¿Cuantas veces al año las personas comprarían tu producto o servicio (Ingresa un número)?");
var disposicionPago = prompt("¿Las personas están dispuestas a pagar el precio de tu producto o servicio (si o no)?");


//Condiciones de conversión para calculo
if(ticketMedio >= 20){
    ticketMedio = 1;
    console.log("Ticket Medio de compra es bueno")
}else{
    ticketMedio = 0;
    console.log("Ticket Medio de compra es bajo")
}

if(competencia === "pocos"){
    competencia = 1;
    console.log("Poca competencia puede ser favorable")
}else{
    competencia = 0;
    console.log("Mucha competencia, será difícil de competir")
}

if(inversionInicial === "menos"){
    inversionInicial = 1;
    console.log("La inversión inicial es baja, disminuye riesgo")
}else{
    inversionInicial = 0;
    console.log("La inversión inicial es relativamente alta, aumenta el riesgo")
}

if(rotacionConsumo >= 3){
    rotacionConsumo = 1;
    console.log("La frecuencia de compra es alta, lo que es positivo")
}else{
    rotacionConsumo = 0;
    console.log("La frecuencia de compra es relativamente baja, si el precio promedio de compra es bajo aumenta el riesgo")
}

if(disposicionPago === "si"){
    disposicionPago = 1;
    console.log("Es fundamental que las personas estén dispuestas a pagar el precio de tu producto, sería útil validarlo")
}else{
    inversionInicial = 0;
    console.log("Si no hay disposición a pago será dificil mantener flujos de venta lo que aumenta el riesgo")
}

//Se procesa resultado de combinación de variables en función de parámetros
function analisis(ticketMedio, competencia, inversionInicial, rotacionConsumo, disposicionPago){
    return ticketMedio + competencia + inversionInicial + rotacionConsumo + disposicionPago;
}

let resultado = (ticketMedio + competencia + inversionInicial + rotacionConsumo + disposicionPago)

analisis(); //Se imprime en consola para visualizar junto a pre-resultados de variables
if(resultado >= 2){
    console.log("Tu idea de negocio es interesante, avanza en ella, pero evalúa y valida bien las variables más riesgosas")
    }else{
    console.log("Resultado del análisis: Hay demasiados riesgos en tu idea, evalúa bien los distintos factores o bien busca otra alternativa")    
    }

analisis(); //Se lanza un alert para visualizar el resultado de la simulación y su recomendación
if(resultado >= 2){
    alert("Tu idea de negocio es interesante, avanza en ella, pero evalúa y valida bien las variables más riesgosas")
    }else{
    alert("Hay demasiados riesgos en tu idea, evalúa bien los distintos factores o bien busca otra alternativa")    
    }
