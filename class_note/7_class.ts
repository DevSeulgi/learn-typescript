class Dev {
  private name: string; // 해당 class 에서만 사용하는 변수
  public age: number; // 해당 class 외에도 사용하는 변수
  readonly log: string; // 값을 변경할 수 없음

  constructor(name: string, age: number){
    this.age = age;
    this.name = name;
  }
}