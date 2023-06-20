import { useCallback, useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(function handleIncrement() {
    setCount((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(function handleDecrement() {
    setCount((c) => c - 1);
  }, []);

  const handleReset = useCallback(function handleReset() {
    setCount((c) => c - c);
  }, []);

  return { count, handleIncrement, handleDecrement, handleReset };
}
