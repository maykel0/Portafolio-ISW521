/*
const persona = {nombre: "pepe", edad: 50};
const {edad: anios = 21} = persona;
console.log(anios);
*/

/*
function sumarTodo(...numeros) {
    return numeros.reduce((acum, n) => acum + n, 0);
}

console.log(sumarTodo(1, 2, 3));
console.log(sumarTodo(5, 10, 15, 20, 25, 30, 35));
*/

/*
const descuento = 0;

console.log(descuento || 10);
console.log(descuento ?? 10);

const nombre = "";
console.log(nombre || "Invitado");
console.log(nombre ?? "Invitado")
*/

/*
import {sumar, restar} from "./operadores.js";

console.log(sumar(5,5));
console.log(restar(5,3));
*/

/*
import {Perro} from "./Perro.js";

const perroUno = new Perro("Firulais", "Mamifero", "Golden Retriever", 7);

console.log(perroUno.ladrar());
console.log(perroUno.comer());
*/

/*
const animal = {
    comer() {
        console.log(`$(this.nombre) esta comiendo`);
    }
};

const perro = Object.create(animal);
perro.nombre = "Rocky";
perro.comer();

console.log(perro.__proto__ === animal);
*/