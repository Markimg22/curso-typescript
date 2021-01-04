export class People {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends People {
  private registration: string;

  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    registration: string,
  ) {
    super(name, lastName, age, cpf); // utilizando o super
    this.registration = registration;
  }

  getFullName(): string {
    return 'Isso vem do aluno: ' + this.name + ' ' + this.lastName;
  }
}

export class Customers extends People {
  getFullName(): string {
    return 'Isso vem do cliente: ' + this.name + ' ' + this.lastName;
  }
}

const studentOne = new Student(
  'Marcos',
  'Campos',
  20,
  '12312312',
  '1231312312312412',
);
console.log(studentOne);
