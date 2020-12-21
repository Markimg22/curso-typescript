// 'intersection' usa o '&' (AND em alguns casos),
// se imaginar tipos como um conjunto, o '&' faz a interseção entre esses conjuntos

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC; // 'A'

/** Exemplo */

type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

// Agora todo o objeto do tipo People é obrigado a ter os tipos HasName, HasLastName e HasAge,
// se não o Typescript vai informar um erro
type People = HasName & HasLastName & HasAge;

export const people: People = {
  name: 'Marcos',
  lastName: 'Campos',
  age: 19,
};

console.log(people);
