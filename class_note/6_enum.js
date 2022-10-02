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
var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["adidas"] = "\uC544\uB514\uB2E4\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); // 아디다스
