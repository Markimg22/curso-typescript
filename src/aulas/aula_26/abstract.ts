/** Classes, Métodos e Atributos Abstratos (abstract):
 *
 * A palavra-chave 'abstract' server para garantir que todas as classes que
 * estenderem da classe abstrata tenham determinados métodos ou atributos.
 *
 * Também impedi a instância da classe abstrada.
 */

export abstract class Character {
  protected abstract emoji: string; // toda classe filha precisa ter este atributo

  constructor(
    protected name: string,
    protected forceAttack: number,
    protected life: number,
  ) {}

  public attack(character: Character): void {
    this.attackPhrase();
    console.log(`${this.name} está atacando...`);
    character.damage(this.forceAttack);
  }

  public damage(forceAttack: number): void {
    this.life -= forceAttack;
    console.log(`${this.name} agora está tem ${this.life} de vida...`);
  }

  public abstract attackPhrase(): void; // toda classe filha de 'Character' precisa ter esse método.
}

export class Soldier extends Character {
  protected emoji = '\u{1F9DD}';

  attackPhrase(): void {
    console.log(this.emoji + 'AAAAAA!!!!!, morre monstro!!!!!');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  attackPhrase(): void {
    console.log(this.emoji + 'I am Monsteeeer!!!');
  }
}

const soldier = new Soldier('Soldier', 10, 100);
const monster = new Monster('Monster', 5, 100);

soldier.attack(monster);
soldier.attack(monster);

monster.attack(soldier);
