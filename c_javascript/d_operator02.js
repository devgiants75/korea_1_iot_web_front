//! d_operator02.js

//# 4. 논리 연산자
// : boolean 값을 연산하는데 사용
// : 참(true)과 거짓(false)을 반환

// - && 연산자(And), || 연산자(OR)
// - ! 연산자

//? && 연산자(논리곱)
// : false가 하나라도! 존재하면 무조건! false

// true && true: true
// true && true && false && true: false

// +) && 연산자의 '단락평가': false 뒤의 내용은 평가되지 X

//? || 연산자(논리합)
// : true가 하나라도! 존재하면 무조건! true

// true || true: true
// false || true: true
// false || false || false: false

// +) || 연산자의 '단락평가': true 뒤의 내용은 평가되지 X

//? ! 연산자(부정 논리, not)
// : boolean 자료형의 데이터는 전환
// : 변수명 앞에 연산자를 붙여서 작성

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true

//# 5. 삼항(조건) 연산자
// : 유일하게 피연산자를 세 개를 가지는 조건 연산자 (기호가 2개)

//? 기본 구조
// 표현식 ? 반환값1 : 반환값2