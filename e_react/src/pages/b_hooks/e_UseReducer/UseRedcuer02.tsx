import React, { useReducer } from 'react'
import { reducer } from './UseReducer01';

export default function UseRedcuer02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      
    </div>
  )
}
