/** Generic with Interfaces and Type Alias:
 *
 * você pode colocar tipos genéricos em uma 'interface' e 'type alias',
 * também colocar valores padrões para ambas.
 */

interface ProtocolPerson<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

type ProtocolCompany<T = string, U = number> = {
  name: T;
  cnpj: T;
  age: U;
};

const studentOne: ProtocolPerson<string, number> = {
  name: 'Marcos',
  lastName: 'Campos',
  age: 20,
};

const studentTwo: ProtocolPerson = {
  name: 'Pedro',
  lastName: 'Henrique',
  age: 30,
};

console.log(studentOne);
console.log(studentTwo);
