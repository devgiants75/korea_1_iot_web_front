import React, { useEffect, useState } from 'react'
import axios from 'axios';

//! Axios
// : JS에서 HTTP 요청을 실행하기 위한 라이브러리
// >> Promise 기반의 HTTP 클라이언트, 브라우저와 node.js 모두 사용 가능

//? HTTP 통신
// : HTTP(HyperText Transfer Protocol)
// >> 웹에서 데이터를 교환하는 주요 프로토콜
// >> 클라이언트(브라우저)와 서버 간의 통신을 위해 사용
//    , 요청(Request)과 응답(Response)의 형태로 데이터가 교환

//& HTTP 요청 방법
// >> HTTP 프로토콜은 다양한 요청 메서드를 지원

//# 1) GET
// : 데이터를 조회할 때 사용
// - URL에 쿼리 파라미터를 포함하여 요청을 보냄
// - 데이터를 조회하고 검색하는 데 사용
// EX) 사용자 정보 조회, 상품 목록 불러오기 등

//# 2) POST
// : 새로운 데이터를 생성할 때 사용
// - 데이터를 요청 본문(body)에 포함시켜 전송
// - 새 리소스를 생성하거나 데이터를 서버로 제출할 때 사용
// EX) 회원 가입, 게시글 작성 등

//# 3) PUT
// : 기존 데이터를 수정할 때 사용
// - 지정된 리소스를 새로운 데이터로 "완전히" 대체
// - 리소스의 전체적인 수정에 사용
// EX) 사용자 프로필 업데이트, 설정 변경 등

//# +) PATCH
// - "일부의 데이터"를 대체

//# 4) DELETE
// : 데이터를 삭제할 때 사용
// - 지정된 리소스를 서버에서 삭제
// - 리소스를 영구적으로 제거할 때 사용
// EX) 계정 삭제, 게시글 제거 등

//? Axios의 장점
// - 간결한 API를 사용 (HTTP 요청과 응답 처리가 간결하고 직관적임)
// - 브라우저의 호환성이 높음
// - 자동으로 JSON 데이터 변환을 지원

//? Axios 사용방법

// 1) 설치 (외부 라이브러리 설치)
// npm i axios

// 2) 'jsonplacholder에서' 데이터 가져오기 / 전송하기
// https://jsonplaceholder.typicode.com/users

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Axios01() {
  const [users, setUsers] = useState<User[] | null>(null);

  //# axios를 사용한 get 요청 (가져오다)
  const fetchUsers = async () => {
    try {
      // axios의 메서드 사용 방법
      // - axios.get('url')
      // - axios.post('url', 저장할데이터)

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      const data = response.data;

      // axios 응답 내부의 데이터: data 속성 내에 저장
      // setUsers(response.data);
      setUsers(data);

    } catch (e) {
      console.error('Error fetching data: ', e);
    }
  }

  // async function fetchUsers() {}

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      HTTP: Axios GET / POST
      <h3>Axios Get</h3>
      {/*  
      uses 데이터가 존재할 경우 UI 출력
        , 그렇지 않을 경우 p태그(데이터를 가져오는 중입니다)
      */}
      {users ? users.map(user => (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      )) : (
        <p>데이터를 가져오는 중입니다</p>
      )}

      {/* 
      {users.map(user => (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))} 
       */}
    </div>
  )
}
