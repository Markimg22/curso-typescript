/** Type Alias in Classes:
 *
 * Como colocar tipo em uma classe?
 * Para isso usamos a palavra-chave 'implements', com isso você informa que uma classe implementa tal tipo.
 * Também você pode implementar vários tipos em uma mesma classe.
 *
 * Exemplo:
 */

type TypeName = {
  name: string;
};

type TypeLastName = {
  lastName: string;
};

type TypeFullName = {
  getFullName(): void;
};

export class Person implements TypeName, TypeLastName, TypeFullName {
  constructor(public name: string, public lastName: string) {}

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Marcos', 'Campos');
console.log(person.getFullName());
