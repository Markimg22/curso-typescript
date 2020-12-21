// 'enum' não existe no Javascript.
// É uma estrutura de dados não ordenada,
// que utilizamos quando temos mais de uma opção para alguma coisa
// e geralmente queremos enumerar essas coisas

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[0]);

/** Você pode valores do enum do enum */

enum Cores {
  ROSA = 10,
  PRETO = 100,
  BRANCO = 2000,
  ROXO = 'Roxo',
}

// console.log(Cores[10]);
// console.log(Cores.ROXO);

/** Criar um 'merge' */
// Para juntar um 'enum' com outro basta deixar os dois com o mesmo nome

console.log(Cores);
