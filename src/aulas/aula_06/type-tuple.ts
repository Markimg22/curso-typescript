// A tupla não existe no padrão Javascript,
// porém podemos usar Typescript para criar uma,
// uma tupla é um array que tem tamanho fixo e tipos bem específicos.

const datasUser: readonly [number, string] = [1, 'Marcos'];
const dataUser2: [number, string?] = [10];
const dataUser3: [number, ...string[]] = [10, 'Guilherme', 'Pedro'];

console.log(datasUser);
console.log(dataUser2);
console.log(dataUser3);
