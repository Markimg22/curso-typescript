// Array<T> || T[]
// T == algum tipo, seja padrão ou criado.

export function multiplyArgs(...args: number[]): number {
  return args.reduce((total, value) => total * value);
}

export function concatStrings(...args: Array<string>): string {
  return args.reduce((total, value) => total + value);
}

export function toArrayUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(multiplyArgs(10, 30, 2));
console.log(concatStrings('Marcos', 'Guilherme', 'Campos'));
console.log(toArrayUpperCase('Marcos', 'Guilherme'));
