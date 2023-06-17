import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";

// import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export default function App() {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={15} />
      <Counter />

      <GithubUserList />
      <ClickCounter initialValue={0} />
      {/* <GithubUser username="peppecaliri" /> */}
    </div>
  );
}
