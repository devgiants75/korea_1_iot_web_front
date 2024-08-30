import React from 'react'

//! 리액트 라우터 사용 방법
//? 1. 설치
// npm install react-router-dom

//? 2. 프로젝트 설정(typescript)
// tsconfig.json 파일에 아래의 설정 추가
// {
//   "compilerOptions": {
//     "jsx": "react-jsx"
//   }
// }

//? 3. index.tsx 파일에 리액트 라우터 설정 추가
// : 전체 프로젝트에서 라우팅 기능을 사용함을 명시
// <BrowserRouter></BrowserRouter> 컴포넌트로 
// , 전체 컴포넌트(<App />)를 감싸기

//! 라우터 사용 방법
// Route 컴포넌트에 path='경로' element={<컴포넌트 />} 속성을 사용
// : 여러 개의 Route를 하나의 컴포넌트에 적용하는 경우
//   >> Routes 컴포넌트로 반드시 묶어서 사용


export default function Index() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white'
    }}>
      <h1>리액트 라우터 돔</h1>

    </div>
  )
}
