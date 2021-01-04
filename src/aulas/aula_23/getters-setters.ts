export class Students {
  constructor(
    private name: string,
    private lastName: string,
    private cpf: string,
    private age: number,
  ) {}

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const studentOne = new Students('Marcos', 'Campos', '123123123', 20);
console.log(studentOne.getName());
