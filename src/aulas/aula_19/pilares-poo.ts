/** Pilares da Programação Orientada a Objetos */

/** Abstração: */

// Permite isolar de um objeto somente os conceitos que são necessários
// para o funcionamento do programa.

export class Pessoas {
  private name: string;
  private lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }
}

/** Encapsulamento */

// Visa ocultar partes internas de um objeto e exibir apenas o necessário
// para o uso externo.

export class RemoteControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }

  public turnOff(): void {
    this.powerStatus = false;
  }

  public getStatus(): boolean {
    return this.powerStatus;
  }
}

/** Herança */

// Visa passar características de um objeto para outro.

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}

export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo Au Au...`);
  }
}

export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está fazendo Miau...`);
  }
}

/** Polimorfismo */

// Algo que é polimorfo tem a habilidade de assumir diferentes formas.
// Mesmo método, porém retorna algo diferente.

class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeNoise();
  }
}

const dog = new Dog('Nila');
const cat = new Cat('Tina');
const animalSounds = new AnimalSounds();

animalSounds.playSound(dog); // Nila está fazendo Au Au...
animalSounds.playSound(cat); // Tina está fazendo Miau...
