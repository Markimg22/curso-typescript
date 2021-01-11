/** Decorators Factories:
 *
 * Uma maneira de passar parâmetros para os nossos decorators.
 *
 * Usando o 'Closure':
 * uma função que recebe os parâmetros e retorna o decorator anônimo.
 */

function reverseNameAndColor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: any): any {
    console.log('Sou o decorador e recebi: ', target);

    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@reverseNameAndColor('Valor1', 'Valor2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('black', 'spider');
console.log(animal);
