import React from 'react'

// 렌더링
// : 작성한 코드를 화면에 출력하는 기능
// >> 조건부 렌더링

//# 자식 컴포넌트

interface IItem {
  // 여행 짐 싸기
  // >> 짐 항목의 이름, 준비 완료 여부
  name: string;
  isPacked: boolean; // 짐을 챙겼을 경우(true), 아직 안챙겼을 경우(false)
}

function Item({ name, isPacked }: IItem) {
  // const example = { a: 1, b: 2, c: 3, d: 4 };

  // const { a, b, c, d } = example;
  // const a = example.a;
  // const b = example.b;
  // const c = example.c;

  // const hello = example;
  // hello.a
  // hello.b 

  //! if 조건문을 사용한 조건부 렌더링
  if (isPacked) {
    return (
      // ctrl + command + space 
      // 시작 버튼 + .
      <li>{name} ❤</li>
    )
  } else {
    return (
      <li>{name}</li>
    )
  }
}


//# 부모 컴포넌트
export default function Rendering01() {
  return (
    <div>
      <p>여행용 짐 목록</p>
      <ul>
        <Item 
          name='과자'
          isPacked={true}
        />
        <Item 
          name='김밥'
          isPacked={false}
        />
        <Item 
          name='음료수'
          isPacked={true}
        />      
      </ul>
    </div>
  )
}
