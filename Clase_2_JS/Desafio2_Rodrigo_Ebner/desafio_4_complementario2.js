/*Desafío complementario - Cálculo de promedio final Anual - Rodrigo Ebner
Se claculan promedio ponderado de semestre 1 y semestre 2,
luego promedio final entre ambas notas semestrales
*/

let pNota1 = parseFloat(prompt("Ingresa tu Nota parcial 1 del 1er semestre"));
let pNota2 = parseFloat(prompt("Ingresa tu Nota parcial 2 del 1er semestre"));
let pNota3 = parseFloat(prompt("Ingresa tu Nota parcial 3 del 1er semestre"));

function promedioSemestre1(pNota1, pNota2, pNota3){
    return pNota1*0.2 + pNota2*0.25 + pNota3*0.55;
}

var resultadoSem1 = (pNota1*0.2 + pNota2*0.25 + pNota3*0.55);
    console.log("Su promedio final el 1er semestre es: " + resultadoSem1);
    alert("Su promedio final el 1er semestre es: " + resultadoSem1);

let pNota4 = parseFloat(prompt("Ingresa tu Nota parcial 1 del 2do semestre"));
let pNota5 = parseFloat(prompt("Ingresa tu Nota parcial 2 del 2do semestre"));
let pNota6 = parseFloat(prompt("Ingresa tu Nota parcial 3 del 2do semestre"));
let pNota7 = parseFloat(prompt("Ingresa tu Nota parcial 4 del 2do semestre"));
    
function promedioSemestre1(pNota4, pNota5, pNota6, pNota7){
    return pNota4*0.15 + pNota5*0.25 + pNota6*0.35 + pNota7*0.25;
}
    
var resultadoSem2 = (pNota4*0.15 + pNota5*0.25 + pNota6*0.35 + pNota7*0.25);
    console.log("Su promedio final el 2do semestre es: " + resultadoSem2);
    alert("Su promedio final el 2do semestre es: " + resultadoSem2);

function promedioFinal(resultadoSem1, resultadoSem2){
    return (resultadoSem1+resultadoSem2)/2
}

var notaFinalAño = (resultadoSem1+resultadoSem2)/2;
console.log("Tu nota final del año es: " + notaFinalAño);
if(notaFinalAño >= 4){
    console.log("Estado: Aprobado");
    alert("Su nota final del año es: " + notaFinalAño + " Felicitaciones, estás aprobado");
}else{
    console.log("estado: Reprobado");
    alert("Su nota final del año es: " + notaFinalAño + " Lo sentimos, estás reprobado");
}
