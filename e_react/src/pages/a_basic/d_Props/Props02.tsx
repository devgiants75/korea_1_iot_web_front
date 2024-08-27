import React from 'react'

// 함수형 컴포넌트 snippets: rfc, rfce

//# 자식 컴포넌트
// 화살표 함수를 사용한 컴포넌트 생성

// - 부모로 부터 사용자에 대한 데이터를 전달(props)받아 UI로 반환
// >> props는 반드시 객체의 형태

type User = {
  name: string;
  age: number;
  email: string;
}

// props 데이터는 변수, 객체든 상관 없이 무조건 {} 객체 내에 작성
// : 객체의 테이터를 한 번에 받아오기 위해서는 본인의 {}객체 틀 외에 또 다른 {}객체 틀로 묶어야 함
type UserCardProps = { user: User };

// const UserCard = ({ name, age, email }: User) => {
// >> 각각의 속성명을 변수로 사용 (구조분해할당)
// { name, age, email } = { '이승아', 50, 'qwe123' }

const UserCard = ({ user }: UserCardProps) => {
  // { user } = { props전달: User }
  // { user } = { { name: '이승아', age: 50, email: 'qwe123' } }

  console.log(user.name);
  console.log(user.age);
  
  const { name, age, email } = user; // 구조분해할당
  console.log(name);
  console.log(age);
  console.log(email);
  
  return (
    // 단일 루트 노드: JSX는 반드시 하나의 루트 태그를 가져야 함!
    <div>
      <h4>{user.name}</h4>

      <p>Age: {age}</p>
      <p>Age: {user.age}</p>

      <p>Email: {email}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}


//# 부모 컴포넌트
function Props02() {
  const userData = {
    name: '이승아',
    age: 50,
    email: 'qwe123'
  };

  return (
    <div>
      {/* props는 반드시 매개변수명={전달할 데이터} */}
      <UserCard user={userData} />
      <UserCard user={{ name: '이도경', age: 60, email: 'qweqwe123123' }} />

      {/* <UserCard name='이승아' age=50 email='qwe123' />; */}
    </div>
  )
}

export default Props02;