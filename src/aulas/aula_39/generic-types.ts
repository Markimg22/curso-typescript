/** Generics Types: <T>
 *
 * Como se adicionasse parâmetros dentro do tipo.
 * Usado quando não sabemos com antecedência qual o tipo de alguma coisa.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFiltered = array.filter((value) => value < 5);

console.log(arrayFiltered);

// criando função 'filter'

type Callback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: Callback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const arrayMyFiltered = myFilter(array, (value) => value < 5);

console.log(arrayMyFiltered);
