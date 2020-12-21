// É semelhante ao tipo 'any' porém mais seguro
// ao invés de aceitar qualquer valor igual o 'any',
// no 'unknown' você deve checar que tipo é um valor.

let x: unknown;
const y = 100;

if (typeof x === 'number') console.log(x + y);
