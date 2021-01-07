/** Key with Types:
 *
 * utilizar chaves de um tipo para atribuir a outro tipo, espalhamento.
 */

type Vehicle = {
  brand: string;
  year: number;
};

// Tipo 'Car' espelha o alguns atributos do tipo 'Vehicle'
type Car = {
  brandCar: Vehicle['brand'];
  yearCar: Vehicle['year'];
  name: string;
};

const car: Car = {
  brandCar: 'Ford',
  yearCar: 2020,
  name: 'Gol',
};

console.log(car);
