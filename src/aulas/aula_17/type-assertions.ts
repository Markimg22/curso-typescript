// Asserções são basicamente você converter um tipo para outro.
// Type Correction
// usado quando você tem a certeza que algo existe

/** Exemplos com Asserção */

/** Recomendado */

// Condicional
// caso você não tenha certeza se um elemento exista
// estreito as possibilidades de tipo, nesse caso o 'body' pode receber um elemento ou nulo,
// porém após verificar, restrita à apenas a receber um elemento
const body1 = document.querySelector('body'); // HTMLBodyElement | null
if (body1) body1.style.background = 'red';

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

/** Não recomendado */

// non-null assertion (!)
/*
const body2 = document.querySelector('body')!; // '!' indica que esse objeto não pode ser nulo
body2.style.background = 'red';
*/
