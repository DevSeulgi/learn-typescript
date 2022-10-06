// 타입 추론
var a; // 타입 지정 안 할 경우 any
var b = 10 // number
var c = 'abc'; // string

function getB(b){
  return b;
} // function getB(b: any): any

function getC(c = 10){
  var b = 'hi'; // (local var) b: string
  return b + c;
} // function getC(c?: number): string

// 10 + '10' // 1010


// 타입 추론 2 - 인터페이스와 제네릭을 이용한 타입 추론 방식
// interface DropDown<T> {
//   value : T; // DropDown<T>.title: string
//   title: string;
// }
// var shoppingItem: DropDown<string> = { // var shoppingItem: DropDown<string>
//   value: 'abc',
//   title: 'hello'
// }


// 타입 추론 3 - 복잡한 구조의 타입 추론
interface DropDown<T> {
  value : T; // DropDown<T>.title: string
  title: string;
}
interface DetailedDropdown<K> extends DropDown<K> {
  description: string;
  tag: K;
  // value,
  // title,
}
var detailedItem: DetailedDropdown<string> = { 
  // 'DetailedDropdown<string>': description, tag, value, title
  title: 'abc',
  description: ' ab',
  value: 'a',
  tag: 'a'
}
// detailedItem: DetailedDropdown<string>을 <number>로 변경할 경우,
// interface DetailedDropdown<K>의 K 값이 바뀌기 때문에,
// interface DropDown의 <T> 값도 바뀌게 된다.


// Best common Type 추론 방식
var arr = [1, 2, true, false, 'a'];
