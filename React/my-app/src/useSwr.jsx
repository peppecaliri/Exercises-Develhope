import { useSWR, mutate } from "swr";

const fetchData = (url) => fetch(url).then((res) => res.json());

export function useSwr(username = "vasco") {
  const [data, error] = useSWR(
    `https://api.github.com/users/${username}`,
    fetchData
  );

  function fetchGithubUser() {
    mutate();
  }

  return {
    data: data ? data : null,
    error,
    onFetch: fetchGithubUser,
  };
}
