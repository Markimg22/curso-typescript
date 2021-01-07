/** Generics with Intersections:
 *
 * Você pode utilizar 'intersections' com tipos genéricos.
 */

// nesse caso o tipo de retorno é uma intersecção entre os tipos genéricos 'O1' e 'O2'.
export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const obj1 = { name: 'Marcos' };
const obj2 = { lastName: 'Campos' };

console.log(joinObjects(obj1, obj2));
