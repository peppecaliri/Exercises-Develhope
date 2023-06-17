import Hello from "./Hello";
import Login from "./Login";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import { useForm } from "./useForm";
// import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";

export default function App() {
  return (
    <div>
      <Hello />
      <Welcome name="John" age={15} />
      <Counter />
      <Login />
      <GithubUserList />
      <ClickCounter initialValue={0} />
      {/* <GithubUser username="peppecaliri" /> */}
    </div>
  );
}
