import React from 'react'
//! 파일명까지 명시
import Props01 from './d_Props/Props01';
import ReactExample from './a_React/ReactExample';
import Component01 from './b_Component/Component01';

//! index라는 이름을 가진 파일은 폴더명까지만 명시 가능
import MainComponent from './b_Component';
import MainJSX from './c_JSX';

export default function index() {
  return (
    <div>
      <h2>a_React 리액트 VS 타입스크립트</h2>
      <ReactExample />

      <h2>b_Component 리액트를 구성하는 기본 구조</h2>
      <Component01 />
      <MainComponent />

      <h2>c_JSX 리액트의 기본 문법</h2>
      <MainJSX />

      <h2>d_Props 리액트의 데이터 전달 - Props (부모 - 자식)</h2>
      <Props01 />
    </div>
  )
}
