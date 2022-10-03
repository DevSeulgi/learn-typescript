// function logText(text){
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('10');
// logText(true);

function logText<T>(text: T): T{
  console.log(text); // (parameter) text: T
  return text; // (parameter) text: T
}
// genetic의 추론
logText(10); // function logText<10>(text: 10): 10
logText('10'); // function logText<"10">(text: "10"): "10"


// generic 타입 지정
// logText<string>(10); // Argument of type 'number' is not assignable to parameter of type 'string'.
logText<number>(10);


// generic을 사용하는 이유 - 필요없는 함수 중복 선언
// function logText(text: string){
//   console.log(text);
//   text.split('').reverse().join();
//   return text;
// }

// function logNumber(text: number){
//   console.log(text);
//   return text;
// }

// generic을 사용하는 이유 - 유니온 타입 활용 시 문제
// input은 해결 but 반환값 해결 x
// function logText2(text: string | number){
//   console.log(text);
//   // text -> (parameter) text: string | number 로 한정.
//   return text;
// };

// const splitTest = logText2('a');
// // splitTest.split(''); // Property 'split' does not exist on type 'string | number'. Property 'split' does not exist on type 'number'.

function logText3<T>(text: T): T{
  console.log(text);
  return text;
}

logText3('hello'); // function logText3<string>(text: string): string
logText3<string>('hello');

const splitTest2 = logText3('check').split(''); // const splitTest2: string[]
const splitTest3 = logText3('check') // const splitTest3: "check"
const typeTest = logText3<boolean>(true); // const typeTest: boolean


// 인터페이스에 generic 추가하기
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// let check: Dropdown = { value: 'check', selected: true };
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
// let check: Dropdown = { value: 'check', selected: true };
// Generic type 'Dropdown<T>' requires 1 type argument(s).
let check: Dropdown<string> = { value: 'check', selected: true }; // let check: Dropdown<string>


// generic의 타입 제한
function logTextLength<T>(text: T[]): T[]{
  console.log(text.length);
  // Property 'length' does not exist on type 'T'.
  text.forEach(function(text){
    console.log(text);
  });
  return text;
}
// logTextLength<string>('hello');
// Argument of type 'string' is not assignable to parameter of type 'string[]'.
logTextLength<string>(['hello']);


// generic의 타입 제한2 - 정의된 타입 이용하기
interface LengthText {
  length: number;
}
function logTextLength2<T extends LengthText>(text: T){
  text.length;
  return text;
}
// logTextLength2(10);
// Argument of type 'number' is not assignable to parameter of type 'LengthText'.
logTextLength2(['a', 'b'])
logTextLength2('a')
logTextLength2({ length: 10 })
// logTextLength2({ leng: 10 })
// Argument of type '{ leng: number; }' is not assignable to parameter of type 'LengthText'. Object literal may only specify known properties, and 'leng' does not exist in type 'LengthText'.


// generic의 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(ItemOption: T): T{
  return ItemOption
}
// getShoppingItemOption('a')
// Argument of type '"a"' is not assignable to parameter of type 'keyof ShoppingItem'.
// getShoppingItemOption<number>(10)
// Type 'number' does not satisfy the constraint 'keyof ShoppingItem'.
getShoppingItemOption("name");
// 자동완성 키워드 확인 ⌘ + I