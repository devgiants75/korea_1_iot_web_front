import React from 'react';
import ReactExample from './pages/a_basic/a_React/ReactExample';

// 파일명까지 명시
import Component01 from './pages/a_basic/b_Component/Component01';

// index라는 이름을 가진 파일은 폴더명까지만 명시 가능
import Index0826 from './pages/a_basic/b_Component';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project</h1>
      {/* 컴포넌트 호출 <컴포넌트명 /> */}
      <ReactExample />
      <Component01 />

      {/* 폴더의 기본이 되는 컴포넌트 */}
      <Index0826 />
      내용 수정
    </div>
  );
}

export default App;
