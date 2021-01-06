/*
type ColorsObj = {
  vermelho: 'red';
  azul: 'blue';
  verde: 'green';
};

const colorsObj: ColorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

// nesse caso 'color' não pode ser do tipo 'string', pois ela apenas pode receber 'vermelho' | 'verde' | 'azul'.
function translateColor(color: string, colors: ColorsObj): string {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
*/

/** Maneira de Resolver */

type ColorsObj = typeof colorsObj; // pegar um tipo apartir de um objeto
type ColorsKey = keyof ColorsObj; // pegar união das chaves de um objeto

const colorsObj = {
  vermelho: 'red',
  verde: 'greeen',
  azul: 'blue',
};

function translateColor(color: ColorsKey, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
