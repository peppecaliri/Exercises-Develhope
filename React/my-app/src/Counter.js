import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log("mounted");
    let startInt = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      console.log("unmounting");

      clearInterval(startInt);
    };
  });

  return (
    <div>
      <CounterDisplay display={count} />
    </div>
  );
}
