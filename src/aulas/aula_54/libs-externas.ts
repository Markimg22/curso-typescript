/** Bibliotecas de terceiros:
 * para usar bibliotecas de terceiros no typescript,
 * é necessário instalar os tipos '@types' dessa bibliotecas como devDependence.
 */

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('marquim@hotmail.com'));
console.log(_.clone([1, 2, 3, 4, 5, 6]));
