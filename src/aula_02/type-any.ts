// Utilize 'any' apenas em último caso
// aceita qualquer tipo de dado
// quando não é implícito ocorre erro

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('Olá'));
