import { useCounter } from "./useCounter";

export default function ClickCounter() {
  const { count, handleIncrement, handleDecrement, handleReset } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
      <button onClick={handleReset}>Increment</button>
    </div>
  );
}
