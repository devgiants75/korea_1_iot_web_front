import React, { useState } from "react";

/*
! useState를 사용한 이벤트 처리 & 상태 관리

? 요구 사항 정리

1. 폼 필드
: 사용자 아이디, 비밀번호, 이메일 주소 입력 (문자열 데이터)

2. 입력 유효성 검사
: 모든 필드 입력창은 비워져 있을 수 X

3. 상태 관리
: 입력값은 객체로 하나의 useState를 통해 상태 관리 (formData)

4. 폼 제출
: 폼 제출 시 모든 입력 값이 콘솔에 출력 (객체 자체를 출력)
>> 입력 조건을 만족하지 않는 경우(유효성 검사 불일치 시) - 오류 메시지 출력
>> 오류 메시지 관리도 컴포넌트 내에서 상태 관리
*/

/*
! 작업 순서
- 폼과 필요한 입력 필드 생성
- 입력 필드에 대한 상태 관리 로직 (onChange)
- 입력 유효성 검사 추가, 오류 메시지 표시 로직 작성
- 폼 제출 함수 구현, 콘솔에 입력 데이터 출력
*/

interface IFormData {
  id: string;
  password: string;
  email: string;
}

export default function UseState04() {
  //! 폼 데이터 상태 관리
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    password: "",
    email: "",
  });

  const { id, password, email } = formData;

  const handleSignUpSubmit = () => {

  }

  const handleInputChange = () => {

  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        textAlign: "center"
      }}
    >
      <h3>회원가입 구현</h3>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>
            아이디:
            <input
              type="text"
              name="id"
              value={id}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            이메일:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
