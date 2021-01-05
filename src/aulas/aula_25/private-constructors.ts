/** Construtores Privados e Singleton:
 *
 * Em alguns casos, não queremos criar novas instâncias, apenas retornar uma existente
 * ou caso não exista, criar uma estância. Resumindo queremos apenas ter uma estância.
 * Isso é uma padrão de projeto chamado Singleton.
 *
 * Para fazer isso criamos um 'private constructor'.
 */

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  public connect(): void {
    console.log(`Conectando com: ${this.host}, ${this.user}, ${this.password}`);
  }

  public static getDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('locahost', 'root', '12312');
const db2 = Database.getDatabase('dasd', 'dawdda', 'eadsa');

console.log(db1 === db2); // true, são os mesmos objetos
