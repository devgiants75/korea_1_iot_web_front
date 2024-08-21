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

// 1) Partial(부분적인, 선택적인)
// >> 모든 속성을 선택적으로 만들어줌
// >> Partial<T>

interface User {
  name: string;
  age: number;
}

const users: {[key: number]: User} = {
  1: {
    name: '이승아',
    age: 50
  }, 
  2: {
    name: '이도경',
    age: 40
  }
}

// 사용자 데이터를 업데이트(수정)하는 함수 구현
// >> id값을 사용하여 해당 데이터의 name 또는 age 값을 수정
function updateUser(id: number, changes: Partial<User>) {

}