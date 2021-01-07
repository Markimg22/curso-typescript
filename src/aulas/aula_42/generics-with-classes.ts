/** Generics with Classes:
 *
 * Você pode inserir tipo genéricos nas classes normalmente.
 */

export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person = new Person('Marcos', 20);
console.log(person);

/**
 * Porém em alguns caso o typescript não conseguir inferir tipos genéricos em uma classe.
 * Exemplo, a estrutura de dados pilha.
 */

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.count--;

    const element = this.elements[this.count];
    delete this.elements[this.count];

    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  getSize(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

// o tipo só será inferindo quando especificamos aqui.
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

stack.showStack();
