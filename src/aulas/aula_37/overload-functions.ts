/** Overload Functions:
 *
 * Baseado nos parâmetros que uma função recebe,
 * ela se comporta de maneira diferente.
 */

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 10));
console.log(adder(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
