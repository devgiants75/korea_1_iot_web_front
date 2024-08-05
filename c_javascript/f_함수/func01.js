// func01.js (function 키워드 축약형)

//! 자바스크립트 함수

// 1. 함수의 정의
// : 특정 작업을 수행하거나 값을 계산하는 데 사용되는 코드의 묶음(집합)

// 2. 함수의 사용 용도 / 예제

//? 1) 코드 재사용

// EX) 두 수의 합을 계산하는 자바스크립트 함수
//    : f(x) = y
function sum(a, b) { 
  return a + b;
}

let result = sum(1, 2); // 3
console.log(result);

console.log(sum(9328, 3423)); // 12751

//? 2) 모듈화 & 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리
// >> 각 함수가 수행하는 작업에 집중

// 모듈성
// : 로직(코드 흐름) 단위로 작업을 나누어 관리할 수 있는 특성

//? 3) 이벤트 처리
// : 웹 페이지에서 발생하는 다양한 이벤트를 처리하는데 사용

/*
let button = document.querySelector('button');

- 웹 문서의 요소들과 묶이는 기능 동작을 함수로 정의
function message() {
  console.log('버튼이 클릭되었습니다.');
}

- 웹 문서의 내용인 button 클릭 시 동작을 설계
button.addEventListener('click', message);

*/