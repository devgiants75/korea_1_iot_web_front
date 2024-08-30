import { useState } from "react";

export function useCounter(initialValue: number) {
  // 
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);
}