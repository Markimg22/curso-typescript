/** This Polimórfico: */

export class Calculator {
  constructor(public someNumber: number) {}

  add(n: number): this {
    this.someNumber += n;
    return this; // retorna a própria instância
  }

  subtract(n: number): this {
    this.someNumber -= n;
    return this;
  }

  division(n: number): this {
    this.someNumber /= n;
    return this;
  }

  multiplication(n: number): this {
    this.someNumber *= n;
    return this;
  }
}

const calculator = new Calculator(10);

// chamadas em cadeia isso é possível quando retorna o 'this'
calculator.add(5).multiplication(2).division(2).subtract(5);

console.log(calculator);

/** Padrão de Projeto - GoF: Builder
 *
 * Usado para inicializar um objeto que tem um 'constructor' muito grande,
 * inicializando ele por parte.
 */

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();
