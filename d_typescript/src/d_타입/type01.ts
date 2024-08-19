// type01.ts
export const tmp = '';

//! 타입스크립트의 타입
// : 타입 명시(작성)가 필수 사항 X
// >> 프로그램의 안정성과 가독성을 높이는 역할

//? 타입 명시 방법
// : 타입 어노테이션 (type annotation - 타입 주석)
// >> 변수명 뒤에 콜론을 사용하여 JS 코드에 타입을 정의

//? 타입의 종류
//# 1. 기본 타입(원시 타입 - string, number, boolean 등)
// : 변수명 뒤에 콜론 사용
// >> typeof 연산자 사용 시 나타내는 변환값과 동일한 이름으로 명시 (소문자)

let name: string = '이승아';
// 권장) let 변수명: 타입명 = 값;
let age: number = 50;
let isStudent: boolean = false;

let anyData = '문자열'; // 타입 명시 생략 가능 >> 타입 체킹을 생략 X

// name = 123; - Error (타입 체킹)
// anyData = 123; - 타입을 명시하지 않아도 초기 할당하는 데이터로 타입 지정

//# 2. 배열 (list, array) 타입
// : 순서가 있는 요소의 모음을 나타내는 자료 구조

// - 변수명 뒤에 콜론 사용*
// : 기본타입명 뒤에 배열을 나타내는 []를 첨부
let list1: string[] = ['1', '2', '3'];

// - 제네릭 타입
// : Array<기본타입>
let list2: Array<number> = [4, 5, 6];

//# 3. void 타입
// : 아무런 값이 없다.
// >> 주로 함수에서 반환값이 없거나 
//    , return 키워드가 있더라도 반환하는 값이 없을 때 사용되는 타입

function voidType() {

  return;
}