// interface
interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
}
var developer: Developer;
var person: Person;

// developer = person;
// Property 'skill' is missing in type 'Person' but required in type 'Developer'.
// 왼쪽이 오른쪽보다 구조적으로 더 작을 땐 감쌀 수 없다.
// 오른쪽 것이 더 커야 함.
// class도 동일하게 적용.

// function 함수
var add = function(a: number){
  // ...
}
var sum = function(a: number, b: number){
  // ...
}
sum = add;
// add는 하나만 받을 수 있는데 sum은 파라미터를 두 개 받을 수 있기 때문에 호환 가능
// add = sum; // add가 파라미터의 허용성이 더 작기 때문에 불가


// generic
interface Empty<T> {
  // ...
}
var empty1: Empty<string>;
var empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T>{
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// Type 'NotEmpty<number>' is not assignable to type 'NotEmpty<string>'. Type 'number' is not assignable to type 'string'.
// notempty2 = notempty2;