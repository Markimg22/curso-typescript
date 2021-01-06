/** Declaration Merging:
 *
 * Quando interfaces possuem o mesmo nome elas se juntam, diferente de 'type alias'.
 */

interface Pessoa {
  name: string;
}

interface Pessoa {
  readonly lastName: string;
}

interface Pessoa {
  age?: number;
}

const pessoa: Pessoa = {
  name: 'Marcos',
  lastName: 'Campos',
  age: 20,
};

console.log(pessoa);
