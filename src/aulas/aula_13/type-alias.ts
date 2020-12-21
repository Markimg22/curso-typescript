// É basicamente você criar um apelido para um tipo.

type Age = number;
type CorRGB = 'Vermelho' | 'Verde' | 'Azul' | 'Ciano';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = CorRGB | CorCMYK;

type People = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: FavoriteColor;
};

export const people: People = {
  name: 'Marcos',
  age: 19,
  salary: 200_000, // 200000
  favoriteColor: 'Azul',
};

export function setFavoriteColor(people: People, color: FavoriteColor): People {
  return {
    ...people,
    favoriteColor: color,
  };
}

console.log(people);
console.log(setFavoriteColor(people, 'Preto'));
