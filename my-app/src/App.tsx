import React from 'react';
import ReactExample from './pages/a_basic/a_React/ReactExample';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project</h1>
      {/* 컴포넌트 호출 <컴포넌트명 /> */}
      <ReactExample />
      내용 수정
    </div>
  );
}

export default App;
