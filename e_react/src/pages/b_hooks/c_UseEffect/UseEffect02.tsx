import React, { useState } from 'react'

//! jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// >> async, await, fetch()

// - 게시물을 가져오기
//   >> 로딩, 성공, 실패
//   >> 해당 컴포넌트가 마운팅될 때만 실행

//? 각 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
}

export default function UseEffect02() {
  //? 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);

  //? 로딩 상태 & 에러 상태 관리
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //? 데이터를 불러오는 비동기 함수
  async function fetchPosts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setPosts(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError((e as Error).message);
    }
  }

  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: 'lightcoral',
    }}>
      <h3>Posts 게시물</h3>

      <button>게시물 불러오기</button>
    </div>
  )
}
