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

  const goToParentPage = () => {
    console.log("버튼이 클릭됨");
    navigate("/parent");
  };

  const goToHomePage = () => {
    navigate('/');
  }

  const goToPrevPage = () => {
    navigate(-1);
  }

  return (
    <div>
      <p>UseNavigate01 페이지입니다</p>
      <button onClick={goToParentPage}>parent 페이지로 이동합니다</button>
      <button onClick={goToHomePage}>Home 페이지로 이동합니다</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동합니다</button>
    </div>
  );
}
