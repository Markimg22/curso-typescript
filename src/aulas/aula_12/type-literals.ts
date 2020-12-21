// Tipos literais é basicamente você usar valores como tipos.
// No Javascript utilizar 'const' já está usando um tipo literal

// 'x' é do tipo 'number'
let x = 10;   // eslint-disable-line
// const y = 30; // 'y' só pode ser 30, logo um tipo literal, y: 30

// 'a' é do tipo 100, e só pode receber 100,
let a = 100 as const; // eslint-disable-line

export const person = {
  name: 'Marcos' as const,
  lasName: 'Campos',
};

console.log(person);
