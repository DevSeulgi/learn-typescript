interface Person {
  name: string;
  age: number;
}

type Cat = {
  name: string;
  age: number;
}

// let parkSeulgi: Person = {};
// Type '{}' is missing the following properties from type 'Person': name, age

// let kumho: Cat = {};
// Type '{}' is missing the following properties from type 'Cat': name, age

type MyString = string;
let greeting: MyString = 'hello';

type Family = { species: 'string', number: number, cat: boolean };
function getFamily(family: Family){

}