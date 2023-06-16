import { useState, useEffect } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
  const [data, setData] = useState("");
  const [usernames, setUsernames] = useState([]);

  function handleInput(event) {
    const value = event.target.value;
    setData(value);
  }

  function addUser() {
    setUsernames([...usernames, data]);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(usernames);
  }, [usernames]);

  return (
    <div>
      <input value={data} type="text" name="username" onChange={handleInput} />
      <button onClick={addUser}>Search User</button>
      <div style={{ display: "flex" }}>
        {usernames.map((user) => (
          <GithubUser username={user} />
        ))}
      </div>
    </div>
  );
}
