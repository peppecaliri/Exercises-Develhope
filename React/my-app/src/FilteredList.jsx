import { useMemo, useState } from "react";

export function FilteredList({ people = [] }) {
  const [filtered, setFiltered] = useState(people);
  useMemo(() => {
    setFiltered(filtered.filter((el) => el.age > 18));
  }, [people]);
  return (
    <div>
      <ul>
        {filtered.map((el) => (
          <li>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}
