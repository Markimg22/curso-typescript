// classe em TypeScript também funciona como um tipo.

export class Company {
  public readonly nameCompany: string;
  private readonly contributors: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.nameCompany = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(contributor: Collaborator): void {
    this.contributors.push(contributor);
  }

  public showContributors(): void {
    for (const contributor of this.contributors) {
      console.log(contributor);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
    public readonly age: number,
  ) {}
}

const companyOne = new Company('MTI', '129312313');

const collaboratorOne = new Collaborator('Marcos', 'Campos', 20);
const collaboratorTwo = new Collaborator('Pedro', 'Moraes', 12);

companyOne.addCollaborator(collaboratorOne);
companyOne.addCollaborator(collaboratorTwo);
companyOne.addCollaborator(new Collaborator('Heitor', 'Moraes', 29));
companyOne.addCollaborator({ name: 'João', lastName: 'Oliveira', age: 22 });

console.log(companyOne);
companyOne.showContributors();
