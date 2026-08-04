"use strict";

let nombreCompleto = "Mi nombre";

let precio: number;

function suma(a: number, b: number) {
    return a + b;
}

function saludar(nombre) {
    console.log(typeof nombre);
}

let arreglo = ["nombre1", "nombre2"];
console.log(typeof arreglo);

/*
principalmente cuando se usan funciones mas desarrolladas para una simple suma no es necesario pero 
en casos en los que ya sea un programa que es de uso mas practico o realista es mejor para evitar errores
*/ 

let tipoany: any;

tipoany = 1;
tipoany = "hola mundo";
tipoany = true;

let desconocido: unknown;
let suma2 = desconocido + 2;
if(typeof desconocido === 'number'){
    suma2 = desconocido + 2;
}

function mostrarMensaje(mensaje: string):void{
    console.log(`El mensaje es: ${mensaje}`)
}


let tipoString:string;

if(typeof tipoString !=== 'null'){};