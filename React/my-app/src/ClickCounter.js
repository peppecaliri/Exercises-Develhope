import { useState } from "react";

export default function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
