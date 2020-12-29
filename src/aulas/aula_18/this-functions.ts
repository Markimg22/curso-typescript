// tipar o 'this' dentro de uma função

export function funcao(this: Date, argumento1: string): void {
  // 'this' não é um argumento da função
  console.log(this);
  console.log(argumento1);
}

funcao.call(new Date(), 'Marcos');
