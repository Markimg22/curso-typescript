/** Encadeamento Opcional: ?
 * Com encadeamento opcional, posso encadear uma função independente do valor retornado.
 */

/** Coalecência Nula: ??
 * Vai verificar se o valor recebido da esquerda é um 'não valor' null ou undefined.
 */

type Documento = {
  title: string;
  text: string;
  date?: Date;
};

const someDocument: Documento = {
  title: 'O título',
  text: 'Hello',
  // date: new Date(),
};

// mesmo 'date' retornando 'undefined' posso encadear uma função.
// caso retorne um não valor, execute o lado direito
console.log(someDocument.date?.toDateString() ?? 'Ixi, não existe data');
