/** Decorator Parameter:
 *
 * Só funciona para assitir o parâmetro, saber oque ele é, e o que tem.
 * Não funciona para alterar valor.
 */

function decorator(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
}

export class OnePeople {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  // decorando parâmetro
  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastName;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();

    if (!firstName) return;

    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const people = new OnePeople('Marcos', 'Campos', 20);
const method = people.method('Hello world');

console.log(method);
