import React from "react";
import { useNavigate } from "react-router-dom";

//! useNavigate()
// : React Router에서 제공하는 Hook
// >> 사용자를 다른 페이지로 이동시킬 때 사용

//? Link 컴포넌트와의 차이
// >> 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능

export default function UseNavigate01() {
  //# useNavigate() 사용방법
  const navigate = useNavigate();
  // >> '네비게이트'라는 이름으로 호출
  // >> 원하는 경로를 문자열 인수로 전달하여 이동

  //? useNavigate 훅의 옵션
  // - state 옵션
  // : 네비게이션(경로)과 함께 상태 전달이 가능
  // >> 해당 상태는 useLocation을 통해 접근 가능

  const goToParentPage = () => {
    console.log("버튼이 클릭됨");

    //? 경로 지정 시 / 유무의 차이
    // 1) / 작성 ("/parent")
    // : 메인 경로 + /경로
    // >> localhost:3000/parent

    // 2) / 미작성 ("parent")
    // : 현재 경로 + /경로
    // >> localhost:3000/routerHook/parent
    
    navigate("/parent", { state: { userId: 12345 }});
  };

  const goToHomePage = () => {
    navigate('/');
  }

  const goToPrevPage = () => {
    navigate(-1);
  }

  // 임의의 버튼 클릭 시 b_hooks의 index.tsx로 이동
  // >> 이동 시 { username: '이승아' } 전달

  // b_hooks의 index.tsx에서 전달된 값을 받아
  // : 화면에 '이승아' 출력

  const goToHooksPage = () => {
    navigate('/hooks', { state: { username: '이승아' }});
  }

  return (
    <div>
      <p>UseNavigate01 페이지입니다</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다</button>
      <button onClick={goToHomePage}>Home 페이지로 이동합니다</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동합니다</button>
      <button onClick={goToHooksPage}>Hooks 페이지로 이동합니다</button>
    </div>
  );
}
