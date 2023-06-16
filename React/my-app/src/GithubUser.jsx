import { useState, useEffect } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        width: 500,
        margin: 2,
      }}
    >
      <h1>{data && data.login}</h1>
      {data && <img src={data.avatar_url} alt="" style={{ width: 200 }} />}
    </div>
  );
}
