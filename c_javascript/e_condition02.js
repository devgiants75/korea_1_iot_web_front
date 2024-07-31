//! e_condition02.js

//# 4. switch문
// : 하나의 표현식의 값을 확인하고 해당 값과 일치하는 
//   case문의 코드 블록을 실행

//* switch case문의 구조 (기본 형태)
/*
switch (식) {
  case 값1:
    식이 값1과 일치할 경우
  case 값2:
    식이 값2과 일치할 경우
  case 값3:
    식이 값3과 일치할 경우
  case 값4:
    식이 값4과 일치할 경우
  ...
  default:
    식이 어떤 값과도 일치하지 않을 경우 실행
}
*/

let fruit = 'banana';

// case의 데이터 유형은 switch 식의 데이터 유형과 동일
switch (fruit) {
  case 'apple':
    console.log('사과');
    break;
    // 동일한 case값을 찾을 경우: 그 다음 이어지는 코드를 모두 실행
    // >> 코드 실행 흐름을 중지하려면 break키워드를 사용하여 switch문을 탈출
  case 'banana':
    console.log('바나나');
    break;
  case 'orange':
    console.log('오렌지');
    break;
  default: // 일치하는 case 값이 없는 경우 - 필수 X
    console.log('일치하는 과일이 없습니다.');
}

//! 조건문 종합 예제
let score; // 점수
let grade; // 학점
// 점수를 변수에 담아 해당 점수가
// 0 미만 100 초과일 경우 '유효한 점수가 아닙니다.'

// 90점 이상 A 
// 80점 이상 B 
// 70점 이상 C
// 60점 이상 D
// 그외의 경우 F >> 각 학점의 값을 grade라는 변수에 대입

//? 1) if문 (else if, else문)

//? 2) switch문

//? 3) 삼항 연산자