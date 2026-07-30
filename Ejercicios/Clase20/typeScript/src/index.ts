console.log("hola");

let nombre: string = "Maykel";
let apellidos: string = "Gonzalez";

function suma(a: number, b: number): number{
    return a + b;
}

function suma2(a: number, b: number){
    return a + b;
}

function saludar(nombre: string): void{
    console.log(`hola ${nombre}`)
}

import {Persona} from "./Persona";
const p = new Persona("Ana", "Martines", 25);

console.log(p.saludar());