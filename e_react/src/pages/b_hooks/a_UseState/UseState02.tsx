import React, { useState } from 'react'

//! useState
// : "컴포넌트 내에서" 데이터에 대한 상태 관리

// - 리액트의 이벤트 핸들러와 함께 사용
// >> UI에서 발생하는 이벤트에 반응하여 상태를 변화

//! 여러 개의 입력 상태 관리
// >> 스프레드 연산자, 비구조화 할당
const fruits = ['사과', '바나나', '망고'];
const fruits2 = [...fruits];

const person = {
  name: '이승아',
  age: 50,
  hobby: '자전거'
}
const person2 = { ...person, name: '이도경', hobby: '독서' };

export default function UseState02() {
  const [inputValue, setInputValue] = useState<string>('');

  //# 이벤트 핸들러 정의
  // : Input 창에 Change(변화)가 일어나면 처리할(handle) 로직
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // let inputText = e.target.value;
    // setInputValue(inputText);
    setInputValue(e.target.value);
  }

  const handleResetClick = () => {
    setInputValue('');
  }

  return (
    <div>
      <p style={{ color: 'blue' }}>useState와 이벤트 핸들러 같이 사용하기</p>

      {/* 
      input의 텍스트를 p 태그의 내용으로 전달하는 이벤트 설정 
      */}
      <input type="text" value={inputValue} onChange={handleInputChange}/>
      {/* 
      >> onChange 이벤트
        : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        EX) input, select, textarea 등의 요소에 적용

      <select onChange={handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>  
      */}

      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>

      <hr />
    </div>
  )
}
