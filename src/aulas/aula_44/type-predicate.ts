/** Type Predicate:
 *
 * Quando uma função retorna um booleano true,
 * eu posso definir que esse valor retornado vai ser de um tipo.
 */

// se 'value' for um 'number', ele receberá o tipo 'number'
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sum<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value;
    return sum;
  }, 0);

  return result;
}

console.log(sum(1, 2, 3));
console.log(sum('a', 'b', 'c'));
console.log(sum(...[1, 2, 3, 4, 'a', 'b', 'c']));
