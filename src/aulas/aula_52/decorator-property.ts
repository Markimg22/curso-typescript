/** Decorator Property:
 *
 * Podemos alterar tudo através de um decorator na propriedades.
 * Também podemos configurar 'getters e setter' com o decorator.
 */

function decorator(classPrototype: any, nameProperty: string | symbol): any {
  console.log(classPrototype);
  console.log('Nome da Propriedade: ', nameProperty);

  let valueProperty: any;

  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }
      valueProperty = value;
    },
  };
}

export class OnePeople {
  // decorator property
  @decorator
  name: string;
  @decorator
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

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
