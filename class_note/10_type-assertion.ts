// 타입 단언(type assertion)
var a;

a = 20;
a = 'a';

// var b = a;
// 중간에 바뀐 값은 추론할 수 없음
// vscode보다 개발자가 type을 더 잘 알 때도 있다.
// 그럴 경우에 사용하는 것이 as

var b = a as string;


// DOM API 조작
// <div id = 'app'>hi</div>

// div는 HTMLDivElement인 것을 as를 이용하여 타입 단언
var div = document.querySelector('div') as HTMLDivElement;

// div가 있는지 보장할 수 없기 때문에 확인을 먼저하고 진행함
if(div){
  div.innerText
}

// var div: HTMLDivElement | null

