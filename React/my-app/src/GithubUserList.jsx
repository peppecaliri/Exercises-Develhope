import { useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList() {
  const [gitName, setGitName] = useState("");

  function handleName(event) {
    const value = event.target.value;
    setGitName(value);
  }

  console.log(gitName);
  return (
    <div>
      <form action="">
        <label htmlFor="gitName">Search User</label>
        <input
          value={gitName}
          type="text"
          name="username"
          onChange={handleName}
        />
      </form>
      <Link to={`/users/${gitName}`}>Search User</Link>
    </div>
  );
}
