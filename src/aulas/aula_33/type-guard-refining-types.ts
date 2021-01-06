/** Type Guard:
 *
 * Exemplo Simples:
 */

function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', '5'));

/** Exemplo Complexo: */

type Person = { name: string };
type Animal = { color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  if (obj instanceof Student) console.log(obj.name);
}

showName(new Student('Marcos'));
