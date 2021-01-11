/** Decorators:
 *
 * Uma maneira de entender seria imaginar como um objeto impostor.
 * Ele finge ser seu objeto, e no meio do caminho ele pode observar,
 * modificar ou substituir seu objeto.
 *
 * Assim como em outras linguagens o 'decorator' são funções.
 */

@decorator // com isso a classe Animal passa na função 'decorator'
export class Animal {
  constructor(public color: string) {}
}

/** Função Decorator que retorna uma classe.
 * com isso você pode mudar coisas dentro dela, sem modificar a própria classe.
 */
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Classe Decorator');

  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = 'Qualquer coisa';
    }
  };
}

const animal = new Animal('black');
console.log(animal);
