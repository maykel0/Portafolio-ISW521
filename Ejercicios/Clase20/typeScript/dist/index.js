"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hola");
let nombre = "Maykel";
let apellidos = "Gonzalez";
function suma(a, b) {
    return a + b;
}
function suma2(a, b) {
    return a + b;
}
function saludar(nombre) {
    console.log(`hola ${nombre}`);
}
const Persona_1 = require("./Persona");
const p = new Persona_1.Persona("Ana", "Martines", 25);
console.log(p.saludar());
//# sourceMappingURL=index.js.map