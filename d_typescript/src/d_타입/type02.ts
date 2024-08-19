// type02.ts
export const tmp = '';

//! 타입스크립트의 객체 타입

//? 1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;) 사용을 권장

const username: string = '이승아';

const user: {
  // 각 타입 구분 시 콤마와 세미콜론 모두 사용 가능
  // >> 세미콜론 사용을 권장
  name: string;
  height: number;
  favorite: any[];
  // >> 타입에서 명시한 속성은 반드시 객체 내부에 존재!
} = {
  // 객체 내부에서 각 속성의 구분은 콤마(,)로 표시
  name: '이승아',
  height: 169,
  // hobby: 'exercise' - Error
  // >> 객체는 타입 명시를 하지 않은 속성은 정의할 수 X
  favorite: [1, '운동', false, null, undefined, ['안녕', 1]]
}

//! 객체의 선택 속성
// : 선택적 프로퍼티
// >> 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const ldk: {
  name: string;
  height?: number; // 타입 명시 속성 뒤에 물음표를 작성(선택적 프로퍼티)
} = {
  name: '이도경',
  // height: 157 // >> 생략해도 오류 X
}

//! 읽기 전용 속성