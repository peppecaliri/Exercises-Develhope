import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <Link to="/counter">Go to counter</Link>
      <Link to="/users/peppecaliri">Go to your profile</Link>
    </div>
  );
}
