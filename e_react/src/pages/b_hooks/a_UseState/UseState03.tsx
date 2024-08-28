import React from 'react'

//! React 이벤트 객체의 타입 정의

// == 이벤트 타입 ==
// : 이벤트 종류에 따라 다르게 표현
// EX) 입력 필드에 대한 변경 이벤트: React.ChangeEvent
// EX) 클릭 이벤트: React.ClickEvent<>
// EX) 폼 제출 이벤트: React.FormEvent
//     >> 해당 이벤트를 사용하는 핸들러 로직에는 폼 제출의 기본 동작 방지
//        e.preventDefault();

// EX) 키보드 이벤트: React.KeyboardEvent<>
// EX) 마우스 이벤트: React.MouseEvent

export default function UseState03() {
  return (
    <div>UseState03</div>
  )
}
