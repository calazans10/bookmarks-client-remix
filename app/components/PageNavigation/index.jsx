import { Link } from "remix";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function PageNavigation({ pathname, title }) {
  return (
    <div className="page-navigation">
      <ul className="page-navigation__list">
        <li className="page-navigation__item">
          <Link to={pathname}>{title}</Link>
        </li>
      </ul>
    </div>
  );
}
