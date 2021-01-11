type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    console.log('-=-=-=-=-=-');
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOptions) {
        console.log(
          `${votationOption.option}: ${votationOption.numberOfVotes}`,
        );
      }
      console.log('-=-=-=-=-=-');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita??');
const votationApp = new VotationApp();

votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'Java', numberOfVotes: 0 });

votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(0);

votationApp.addVotation(votation1);

const votation2 = new Votation('Qual sua cor favorita??');

votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
votation2.addVotationOption({ option: 'Preto', numberOfVotes: 0 });

votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.vote(0);

votationApp.addVotation(votation2);

votationApp.showVotations();
