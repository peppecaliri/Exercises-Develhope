import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

import { GithubUser } from "./GithubUser";

export default function App() {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={15} />
      <Counter />

      <GithubUser username="peppecaliri" />
    </div>
  );
}
