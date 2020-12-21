// Uma variável, um parâmetro ou retorno de função
// pode ter mais de um tipo.
// se imaginar o tipo como um conjunto, é a união dos conjuntos

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Union = AB | AC; // 'A' | 'B' | 'C'

/** Exemplo */

// nesse caso os parâmetros 'a' e 'b' pode receber um 'number' ou uma 'string'
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 10));
