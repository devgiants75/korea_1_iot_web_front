// object02.js

//# 3. JSON 객체
// : JavaScript Object Notation (자바스크립트 객체 표기법)

//? JSON 구조
// : 기본 데이터 타입의 문자, 숫자, 배열, 불리언, 객체 등 모두를 포함
// >> 배열과 객체를 활용하여 자료의 형태를 구조화

// 'key-value'(키-값)의 쌍으로 데이터를 구성
// >> 순수한 텍스트 형식의 자료: 키를 항상 따옴표로 작성
// >> 함수 사용이 불가
// >> 문자열은 큰따옴표 사용을 권장

//? JSON 사용
// : 서로 다른 시스템 간에 구조화된 데이터를 전송하는데 사용

//? JSON 데이터 예시

// 객체 정의
let data = [
  {
    name: '이승아',
    age: 50,
    job: 'developer',
    hobby: {
      first: 'exercise',
      second: 'reading'
    },
    lecture: ['java', 'python', 'dbms']
  },
  {
    name: '이도경',
    age: 50,
    job: 'employee',
    hobby:  {
      first: 'health',
      second: 'baseball'
    }
  }
];

//& 1) JSON.stringfy()
// : 자바스크립트 객체를 JSON 문자열로 변환