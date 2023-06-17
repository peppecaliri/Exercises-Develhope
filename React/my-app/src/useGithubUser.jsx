import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);

  async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchUser(username);
  }, [username]);

  return { data, fetchUser };
}
