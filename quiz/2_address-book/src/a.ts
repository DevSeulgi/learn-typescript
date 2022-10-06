// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
// let result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();

// 비동기 처리를 통해서 돌려받은 값이 뭔지 알려줘야함 -> 타입추론이 되지 않음
// Promise는 generic을 인자로 받음
