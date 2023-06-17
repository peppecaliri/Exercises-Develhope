import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount((c) => c - 1);
  }

  function handleReset() {
    setCount((c) => c - c);
  }
  return { count, handleIncrement, handleDecrement, handleReset };
}
