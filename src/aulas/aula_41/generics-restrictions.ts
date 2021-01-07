/** Genereic Restrictions:
 *
 * Em alguns momentos o typescript pode reclamar, caso seu tipo genérico seja muito mais amplo.
 * Para fazer uma restrição usamos a palavra 'extends', que é chamado de 'contrains'
 */

// nesse caso 'K' pode ser no máximo uma chave de O.
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  names: ['Leão', 'Lion', 'León'],
  age: 20,
};

const names = getKey(animal, 'names');
console.log(names);
