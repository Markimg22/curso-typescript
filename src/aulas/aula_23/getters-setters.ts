export class Students {
  constructor(
    private name: string,
    private lastName: string,
    private _cpf: string,
    private age: number,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const studentOne = new Students('Marcos', 'Campos', '', 20);
studentOne.cpf = '12312319231';

console.log(studentOne.cpf);
