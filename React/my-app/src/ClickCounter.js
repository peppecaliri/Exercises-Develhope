import { useState, useEffect } from "react";

export default function ClickCounter({ initialValue = 0, func }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    func();
  }, [count]);

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
