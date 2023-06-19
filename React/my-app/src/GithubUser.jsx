import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

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
      {loading && <h2>Loading...</h2>}
      {data && <img src={data.avatar_url} alt="" style={{ width: 200 }} />}
    </div>
  );
}
