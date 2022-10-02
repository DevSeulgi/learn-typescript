// Union type : 특정 타입 하나 이상을 쓸 수 있게 만들어 주는 것
function logMessage(value: string | number){
  if(typeof value === 'string'){
    value.toString();
  }
  if(typeof value === 'number'){
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100)

interface Dev {
  name: string;
  skill: string;
}

interface Stud {
  name: string;
  age: number;
  
}

// function askSomeone(someone: Dev | Stud){
//   // someone.name
//   // someone.age
// }
// askSomeone({name: '하이', skill:'check'});
// askSomeone({name: '하이', age:10});
// -> 교집합이면서 or

// Union intersection type
let donghae: string & number & boolean;
// let donghae: never -> string이면서 number이면서 boolean일 수 없기 때문에

function askSomeone(someone: Dev & Stud){
  someone.name
  someone.skill
  someone.age
}
askSomeone({name: '하이', skill:'check', age: 20});
// -> 합집합이면서 must
