// module01.js

//! 모듈(module)

//# 1. 모듈의 정의
// : 재사용 가능한 코드 조각
// >> 함수, 변수, 클래스, 파일 등을 포함

//# 2. 모듈의 특징
// - 각각의 모듈은 독립성을 가짐
// - 다른 코드 내부에서 재사용 가능
// - 네임스페이스 관리: 모듈 자체의 이름을 가짐(다른 모듈과의 충돌을 방지)
// - 가독성 및 조직화 향상

//# 3. ES6 모듈
// : ES2015 이후에 JS에서 공식적으로 모듈 시스템을 도입
// >> import, export문을 통해 모듈을 가져오고 내보내는 방식 도입

// - 스코프 격리
// : 모듈 내에서 선언된 변수, 함수, 클래스 등은 모듈 외부에서 접근 X
// >> 전역 변수의 사용 줄이고 이름 충돌을 방지

// - 재사용성과 유지보수성 향상'

//# import문 사용 예시

// 1) 이름 붙여 가져오기 - 중괄호 사용 O
// : 여러 개의 export가 가능 
// >> 중괄호 내에서 ,(콤마)로 구분하여 나열

import { PI, multiply } from './module02.js';
// import { multiply } from './module02.js';

console.log(PI); // 3.1412341234
console.log(multiply(2, 3)); // 6

