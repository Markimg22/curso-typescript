/** imports e exports
 * você pode importar arquivos Javascript para Typescript, mas preste atenção com os tipos.
 */

import soma from './modules';

const result = soma(10, 30) as number;
console.log(result);
