// Tipagem estruturada
// para o Typescript a identidade do tipo não importa muito, somente as restrições

/** Exemplo */

type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Marcos', password: '1234' };
const sentUser = { username: 'Marcos', password: '1234', permissions: '' }; // permissions não da erro
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
