/** Associação entre Classes:
 *
 * Exemplo:
 */

export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  get name(): string {
    return this._name;
  }

  write(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }

    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class Typewriter extends Tool {
  write(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Marcos');
const pen = new Pen('Bic');
const typewriter = new Typewriter('Máquina');

writer.tool = pen;
writer.tool = typewriter;
writer.tool = null;

writer.write();
