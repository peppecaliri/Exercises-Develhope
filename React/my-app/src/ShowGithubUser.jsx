import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ShowGithubUser() {
  const { username = "peppecaliri" } = useParams();

  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => setFetchData(json));
  }, [username]);
  console.log(username);
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
      <h1>{fetchData.login}</h1>

      {fetchData && (
        <img src={fetchData.avatar_url} alt="" style={{ width: 200 }} />
      )}
    </div>
  );
}
