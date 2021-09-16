let pNota1 = prompt("Ingresa tu Nota parcial 1 del 1er semestre");
let pNota2 = prompt("Ingresa tu Nota parcial 2 del 1er semestre");
let pNota3 = prompt("Ingresa tu Nota parcial 3 del 1er semestre");
let num1 = parseFloat(pNota1);
let num2 = parseFloat(pNota2);
let num3 = parseFloat(pNota3);

function promedioSemestre1(pNota1, pNota2, pNota3){
    return pNota1*0.2 + pNota2*0.25 + pNota3*0.55;
}

var resultadoSem1 = (pNota1*0.2 + pNota2*0.25 + pNota3*0.55);
    console.log("Su promedio final el 1er semestre es: " + resultadoSem1);
    alert("Su promedio final el 1er semestre es: " + resultadoSem1);

let pNota4 = prompt("Ingresa tu Nota parcial 1 del 2do semestre");
let pNota5 = prompt("Ingresa tu Nota parcial 2 del 2do semestre");
let pNota6 = prompt("Ingresa tu Nota parcial 3 del 2do semsetre");
    
function promedioSemestre1(pNota4, pNota5, pNota6){
    return pNota4*0.25 + pNota5*0.35 + pNota6*0.45;
}
    
var resultadoSem2 = (pNota1*0.25 + pNota2*0.35 + pNota3*0.45);
    console.log("Su promedio final el 2do semestre es: " + resultadoSem2);
    alert("Su promedio final el 2do semestre es: " + resultadoSem2);

function promedioFinal(resultadoSem1, resultadoSem2){
    return (resultadoSem1+resultadoSem2)/2
}

var notaFinalAño = (resultadoSem1+resultadoSem2)/2;
console.log("Tu nota final del año es: " + notaFinalAño);
alert("Su nota final del año es: " + notaFinalAño);