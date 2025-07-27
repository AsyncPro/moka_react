import navData from "../../data/nav.data";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils/capitalize.utils";

export function NavContent() {
  return (
    <div className="nav-content-flex">
      <div className="nav-content-logo">
        <img src="/public/media/noka_bk.png" alt="noka_logo" />
      </div>
      <ul className="nav-content-list">
        {Object.entries(navData).map(([key, value]) => (
          <li key={key}>
            <Link to={value.startsWith("/") ? value : `/${value}`}>
              {capitalize(key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
