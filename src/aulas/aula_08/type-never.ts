// 'never' quer dizer que uma função ou método nunca vai retornar nada
// ex: um laço infinito ou um error

export function createError(): never {
  throw new Error('Erro qualquer');
}

createError();
