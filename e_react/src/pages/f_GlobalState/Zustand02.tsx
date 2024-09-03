import React from 'react'
import { useMemberStore } from '../../stores/user.store'

export default function Zustand02() {
  const { members, addMember } = useMemberStore();

  const handleCreate = () => {
    addMember({
      id: 1,
      name: '이승아'
    });
  }

  return (
    <div>
      {members.map(user => (
        <div>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}
