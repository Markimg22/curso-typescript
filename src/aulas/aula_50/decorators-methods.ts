/** Decorators Methods:
 *
 * Funciona igual os decorators de classe,
 * é chamado assim que o método é criado.
 *
 * Para alterar a função retorna o 'value'.
 */

function decorator(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toLocaleUpperCase();
    },
  };
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

  @decorator
  method(msg: string): string {
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
