import React, { useState } from "react";

//! useCallback 훅
// : 특정 콜백함수가 의존성 배열에 명시된 값들이 변경되지 않는 한 동일한 함수 인스턴스를 유지하도록 해주는 훅
// >> 주로 자식 컴포넌트에 함수를 전달할 때 사용

//# 자식 컴포넌트
const Button = ({handleClick}: { handleClick: () => void }) => {
  console.log('버튼이 렌더링되었습니다.');
  return <button onClick={handleClick}>클릭</button>
}

//# 부모 컴포넌트
export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // 부모 컴포넌트에서 정의한 이벤트 핸들러
  const handleCountClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h3>useCallback</h3>
      <p>Count: {count}</p>
      <Button handleClick={handleCountClick} />

      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
    </div>
  );
}
