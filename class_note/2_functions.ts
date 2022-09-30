// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a:number, b:number){
  return a + b;
};

// 함수의 반환값에 타입을 정의하는 방식
function sum2(): number{
  return 10;
};

// 함수에 타입을 정의하는 방식
function sum3(a:number, b:number): number {
  return a + b;
};

// sum3(10, 20, 30, 40, 50); // Expected 2 arguments, but got 5.

// 함수의 옵셔널 파라미터
function log(a: string, b?: string){

}

log('hello');
log('hello', 'world');
// log('hello', 'world', 'check!');
