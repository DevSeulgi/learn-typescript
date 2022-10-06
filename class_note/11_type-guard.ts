// 타입 가드
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Seulgi', age: 11, skill: 'coding'}
}

var seulgi = introduce();
// console.log(seulgi.skill); // union 타입 특성 상 공통된 특징이 아닌 이상 없다고 뜸
console.log(seulgi.name);

// 비추 방법
if((seulgi as Developer).skill){
  var skill = (seulgi as Developer).skill;
  console.log(skill);
} else if ((seulgi as Person).age){
  var age = (seulgi as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
  // Developer는 skill 값이 포함되어 있기에 undefined 일 수 없음!
  // 그러므로 해당 값으로 들어온 target은 Developer이다.
} // true false로 값 도출

if(isDeveloper(seulgi)) {
  console.log(seulgi.skill);
} else {
  console.log(seulgi.age);
}