let y;
if (typeof y === 'undefined') y = 20;
console.log(y + 120);

export function createPerson(
  firstName: string,
  lastName?: string, // parâmetros opcionais podem ser 'undefined'
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
