// 숫자형 enum
// enum Shoes {
//   Nike,
//   adidas,
//   newBalance
// }
// (enum member) Shoes.Nike = 0
// (enum member) Shoes.adidas = 1
//(enum member) Shoes.newBalance = 2

// 문자형 enum
enum Shoes {
  Nike = '나이키',
  adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
  Yes = 'yes',
  No = 'no'
}
function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답입니다.');
  }
  if(answer === Answer.No){
    console.log('오답입니다.');
  }
}
// askQuestion('yes');
askQuestion(Answer.Yes);
askQuestion(Answer.No);
