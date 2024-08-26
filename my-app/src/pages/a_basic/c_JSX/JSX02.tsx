import React from 'react'

export default function JSX02() {
  // 픽사베이(pixabay) 
  // : 이미지 경로(절대 경로)를 변수에 저장
  const imgUrl = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg';

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2017/02/20/18/03/',
    imageId: 'cat-2083492_640.jpg',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      height: '150px'
    },
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  }

  return (
    <div>JSX02</div>
  )
}
