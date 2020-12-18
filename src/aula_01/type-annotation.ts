/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos):

let name1: string = 'Marcos';                           // Qualquer tipo de string: "", '', ``
let age: number = 19;                                   // 10, 1.30, -12, 0xf00d
let adult: boolean = true;                              // true ou false
let symbol: symbol = Symbol('qualquer-symbol');        // symbol
// let big: bigint = 10n;                               // bigint


// Arrays

let arrayNumbers: Array<number> = [1, 2, 3, 4, 123];
let arrayStrings: Array<string> = ['Marcos', 'Guilherme', 'Pedro'];
let arrayNumbers2: number[] = [1, 123, 12, 123.1];                        // outra maneira declarar tipo de 'array'


// Objetos

let people: {name: string, age: number, adult?: boolean} = {              // '?' torna o tipo boolean opcional
  name: 'Pedro',
  age: 19,
};


// Funções

function soma(x: number, y: number) {   // retorna um tipo 'number'
  return x + y;
}
const result = soma(2, 2);          // inferi o result como tipo 'number'

// outra forma
const soma2: (x: number, y: number) => number = (x, y) => x + y;
