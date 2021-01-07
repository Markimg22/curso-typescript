/** Default Generics:
 *
 * Record:
 * representa um objeto, onde falamos o tipo da chave e o  tipo dos valores.
 *
 * Required:
 * transforma tudo que é opcional de um tipo em não opcional.
 *
 * Partial:
 * transforma tudo que é requirido em opcional.
 *
 * Readonly:
 * transforma tudo em 'readonly' não modificado.
 *
 * Pick:
 * permite escolher chaves de um tipo.
 *
 * Exclude:
 * computa todos os tipos de A que não estão em B.
 *
 * Extract:
 * computa todos os tipos de A que estão em B.
 *
 * Exemplos:
 */

const obj1: Record<string, string | number> = {
  name: 'Marcos',
  lastName: 'Campos',
  age: 20,
};

console.log(obj1);

/** */

type PeopleProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

type PeopleRequired = Required<PeopleProtocol>;
type PeoplePartial = Partial<PeopleRequired>;
type PeopleReadonly = Readonly<PeopleRequired>;
type PeoplePick = Pick<PeopleRequired, 'name' | 'lastName'>;

const obj2: PeoplePartial = {
  name: 'Marcos',
  lastName: 'Campos',
  age: 20,
};

console.log(obj2);

/** */

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>; // A | B
type TypeExtract = Extract<ABC, CDE>; // C
