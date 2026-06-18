/*console.log("Hola");

if (true){
    var edad = 25;
}
console.log(edad);

if (true){
    let puntos = 100;
    console.log(puntos);
}
console.log(puntos);


const PI = 3.14159;
PI = 3;

const user = {id: 1}
user.id = 2;



const v8 = require("v8");

const miVariable = {
    nombre:"Jose",
    version: 2026,
};

const tamano = v8.serialize(miVariable).length;

console.log(`El tamano de la variable es: ${tamano} bytes`);


const readline = require("readline/promises");
const {stdin:input, stdout: output} = require("process");
const rl = readline.createInterface({input, output});
async function iniciar(){
    const nombre = await rl.question("Digite su nombre: ");
    if (validarDatos(nombre)){
        console.log(`El nombre digitado es: ${nombre}`);
    }
    else{
        console.log("Lo que digitaste no son letras");
    }
    rl.close();
}
function validarDatos(nombre){
    const expresion = /^[a-zA-Z]+$/;
    const nombreValidado = expresion.test(nombre);
    if(nombreValidado){
        return true;
    }
    else{
        return false;
    }
}
iniciar();
*/
//1 a 12 son niños
//13 a 17 son adolecentes
//18 o mas adultos
/*
const readline = require("readline/promises");
const {stdin:input, stdout: output} = require("process");
const rl = readline.createInterface({input, output});
async function iniciar(){
    const edad = await rl.question("Digite su edad: ");
    if (edad >= 1 && edad < 13){
        console.log("usted es un niño");
    }
    else if(edad >= 13 && edad < 18){
        console.log("usted es un adolecente");
    }
    else{
        console.log("usted es un adulto");
    }
    rl.close();
}
iniciar();
*/
const readline = require("readline/promises");
const {stdin:input, stdout: output} = require("process");
const rl = readline.createInterface({input, output});
async function inicio(){
    const edad = await rl.question("Digite su edad: ");
    console.log("con esa edad es un: " + (edad >= 1 && edad < 13 ? "niño" : (edad < 18 ? "adolecente": "adulto")))
    rl.close();
}
inicio();

switch(mes){
    case "enero":
        break;
    case "febrero":
        break;
    case "marzo":
        break;
    case "abril":
        break;
    case "mayo":
        break;
    case "junio":
        break;
    case "julio":
        break;
    case "agosto":
        break;
    case "septiembre":
        break;
    case "octubre":
        break;
    case "noviembre":
        break;
    case "diciembre":
        break;
    default:
}

