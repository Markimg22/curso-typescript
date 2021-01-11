function reverseNameAndColor(target: any): any {
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
      return value.split('').reverse().join('');
    }
  };
}

@reverseNameAndColor
export class Animal {
  constructor(public color: string, public name: string) {
    console.log('Sou a Classe');
  }
}

const animal = new Animal('black', 'Spider');
console.log(animal);
