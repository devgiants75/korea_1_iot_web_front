// generic04.ts

//! 유니온 타입과 제네릭

// 유니온 타입(OR, |)
// : 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네릭의 타입 변수에 적용
// extends 키워드를 사용 (확장)

// 해당 함수 호출 시 
// : string 또는 number 타입의 매개변수만 적용
function unionGeneric<T extends string | number>(value: T) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  return value; // 숫자 데이터
}

const result1 = unionGeneric('sTrInG');
const result2 = unionGeneric(1000);

console.log(result1, result2); // string 1000

//# 제네릭 유틸리티 타입
// : TS에 내장된 제네릭 타입
// >> 기존의 타입을 변환하거나 조작하는데 사용