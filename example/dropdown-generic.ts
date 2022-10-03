interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }
// 이메일 목록
const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }
// 타입 추가 가능
interface TrueFalse {
  value: boolean;
  selected: boolean;
}

// 제품 순서 목록
const numberOfProduct: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];
// dropdown 생성
function createDropdownItem(item: DropdownItem<string | number>) {
  const option = document.createElement('option');
  // 입력한 item 인자의 value 값을 string으로 지정
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  // 선택 될 경우 인자의 selected 값으로 지정
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  // <select id="email-dropdown"> 선택하여 selectTag로 지정
  const selectTag = document.querySelector('#email-dropdown');
  // selectTag에 dropdown item 노드 추가
  selectTag?.appendChild(item);
  // ts는 '#email-dropdown' dom의 존재 유무를 모르기 때문에 에러가 남.
  // 옵셔널체이닝 (?)을 사용 -> dom이 있으면 실행 아니면 무시해라는 뜻
  // https://kyounghwan01.github.io/blog/TS/object-null/#%E1%84%8B%E1%85%A6%E1%84%85%E1%85%A5%E1%84%80%E1%85%A1-%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%B2
  // Node.appendChild() 메소드는 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙입니다.
});