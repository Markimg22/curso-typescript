// tipar uma função:
// type NomeDaFunção = (paramêtros) => tipo_retorno;

/** Exemplo */

type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const names = ['Marcos', 'Guilherme', 'Campos'];
const namesUpperCase = mapStrings(names, (name) => name.toUpperCase());

console.log(names);
console.log(namesUpperCase);
