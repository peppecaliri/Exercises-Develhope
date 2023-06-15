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
    <div>
      <h1>{data && data.login}</h1>
      {data && <img src={data.avatar_url} alt="" />}
    </div>
  );
}
