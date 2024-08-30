import React from "react";
import { useInput } from './useInput';

export default function Custom02() {
  const { value, bind, reset } = useInput('');

  const handleSubmit = () => {
    console.log(`회원가입 완료: `);
  }

  return (
    <div>
      <input 
        type="text" 
        name="username" 
        placeholder="사용자 이름" 
      />
      <input 
        type="text" 
        name="email" 
        placeholder="사용자 이메일" 
      />
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  );
}
