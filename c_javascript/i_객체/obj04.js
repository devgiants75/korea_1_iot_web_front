// obj04.js

//! 객체의 참조 타입 이해

// '원시' 타입 (기본 자료형)

// '참조' 타입 (참료 자료형)
// : 메모리에 저장된 객체의 주소를 저장 (변수에 주소값이 저장)

let computer1 = {
  name: '삼성 노트북 북3'
}

let computer2 = computer1; // computer2에는 computer1의 주소값이 저장

computer1.name = '맥북';

console.log(computer2); // { name: '맥북' }

function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer2); // 16번째 줄과 동일

console.log(computer1.name); // 아이패드

//# == 객체의 복사(깊은 복사 & 얕은 복사) ==