interface User {
  age: number;
  name: string;
};

// 변수에 인터페이스 활용
const seulgi: User = {
  age: 11,
  name: '박슬기'
};

// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user);
};

// const cat = {
//   name : '금호'
// }

// getUser(cat); // Property 'age' is missing in type '{ name: string; }' but required in type 'User'.

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a:number, b:number): number;
};

let sum: SumFunction;
sum = function( a: number, b: number ): number {
  return a + b;
};

// let sum: SumFunction = function( a: number, b: number ): number {
//   return a + b;
// };

// 인덱싱
interface stringArr {
  [index: number]: string
};

let alphabet: stringArr = ['a', 'b', 'c'];

// alphabet[0] = 10; // Type 'number' is not assignable to type 'string'.

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
};

let objRegex: StringRegexDictionary = {
  // sth : /abc/,
  // cssFile : 'css' // Type 'string' is not assignable to type 'RegExp'.
  cssFile : /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string,
  age: number,
};

interface Developer extends Person {
  // name: string,
  // age: number,
  language: string
};

// let DevSeulgi: Developer = {
//   language: 'TypeScript' // Type '{ language: string; }' is missing the following properties from type 'Developer': name, age
// }

let DevSeulgi: Developer = {
  name: '박슬기',
  age: 11,
  language: 'TypeScript'
}