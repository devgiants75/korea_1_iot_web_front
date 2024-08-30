import React from 'react';
import { Route, Routes } from 'react-router-dom';

//# 고정될 컴포넌트
import NaviBar from './components/NaviBar';

//# 경로에 따라 바뀌는 컴포넌트
import Basic from './pages/a_basic';
import Hooks from './pages/b_hooks';
import RouterComponent from './pages/c_Router';

import Todos01 from './pages/z_todos';
import Parent from './pages/c_Router/Parent';

//! 리액트 프로젝트 개발 실행 명령어
// npm run start
// : http://localhost:3000 환경에서 실행

function App() {
  return (
    <div>
      <h1>React Project</h1>
      <NaviBar />

      {/* Routes태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장 */}
        {/* path속성: 해당 Routes 내에서 사용하는 URL 경로 */}
        {/* element속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />

        {/*  
          해당 컴포넌트에 대한 메인경로/*
          >> 위 컴포넌트에서 라우트 경로에 따라 페이지 전환이 일어남을 명시
        */}
        <Route path='/routerComponent/*' element={<RouterComponent />} />
        <Route path='/parent' element={<Parent />}>
          
        </Route>

        <Route path='/todos01' element={<Todos01 />} />
      </Routes>
    </div>
  );
}

export default App;
