/** Estáticos (static):
 *
 * Um método e atributos estático, significa que pode ser acessados
 * sem instânciar a classe.
 *
 * Não tenho acesso pela instância apenas pela classe.
 * Também não tenho acesso dentro da classe pela palavra-chave 'this', apenas pelo nome da classe.
 */

export class Human {
  public static defaultAge = 0;
  public static defaultCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  public static createHuman(name: string, lastName: string): Human {
    return new Human(name, lastName, Human.defaultAge, Human.defaultCpf);
  }
}

const human1 = Human.createHuman('Marcos', 'Campos');
console.log(human1);
