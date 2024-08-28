import React, { useState } from 'react'

//! useState
// : "컴포넌트 내에서" 데이터에 대한 상태 관리

// - 리액트의 이벤트 핸들러와 함께 사용
// >> UI에서 발생하는 이벤트에 반응하여 상태를 변화

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
      <select onChange={handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>  
      */}

      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>
    </div>
  )
}
