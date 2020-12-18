const person = {
  name: 'Marcos',
  age: 19,
  country: 'Brazil',
};

person.name = 'André';
// person.city = 'Rio';      // error

/* Outra forma */

const person_one: {
  readonly name: string;
  age: number;
  country: string;
  [key: string]: unknown; // para criar mais chaves
} = {
  name: 'Marcos',
  age: 19,
  country: 'Brazil',
};

// person_one.name = 'André'; // 'readonly' não pode ser alterada
console.log(person_one);
