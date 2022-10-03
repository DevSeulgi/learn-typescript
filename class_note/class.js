// ES2015 (ES6)
class Person {
  // 클래스 로직
  // constructor 인스턴스 생성 및 초기화
  constructor(name, age){
    console.log('생성 완료');
    this.name = name;
    this.age = age;
  }
}

let kiki = new Person('kiki', 11);
console.log(kiki); // '생성 완료' // Person {name: 'kiki', age: 11}

function Person(name, age){
  console.log('생성 완료');
  this.name = name;
  this.age = age;
}

let hehe = new Person('hehe', 12)