/** Public:
 *
 * Um atributo ou método que é 'public' significa que ele é
 * acessível dentro da classe, fora da classe e em todas as subclasses.
 */

/** Private:
 *
 * Um atributo ou método que é 'private' significa que ele só é
 * acessível dentro da classe que ele foi criado.
 */

/** Protected:
 *
 * Um atributo ou método que é 'protected' significa que ele é
 * acessível na classe que foi criada e nas subclasses.
 */

export class Person {
  constructor(
    public readonly name: string,
    private readonly cpf: string,
    protected readonly email: string,
  ) {}
}

export class Cliente extends Person {
  public getEmail(): string {
    return this.email;
  }
}
