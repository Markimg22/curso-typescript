export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const result = squareOf(3);

if (typeof result === null) {
  console.log('Conta inválida');
} else {
  console.log(result);
}
