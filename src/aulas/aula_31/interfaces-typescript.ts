/** Interfaces no Typescript:
 *
 * Interfaces são muito parecidos com 'type alias', porém não conseguimos unir tipos.
 * Com diferenças que geralmente usamos interfaces para modelar objetos
 */

interface TypeName {
  name: string;
}

interface TypeLastName {
  lastName: string;
}

interface TypeFullName {
  getFullName(): string;
}

interface TypePerson extends TypeName, TypeLastName, TypeFullName {}

export class People implements TypePerson {
  constructor(public name: string, public lastName: string) {}

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}
