import { Link } from "remix";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function MainNavigation({ pathname, title }) {
  return (
    <nav className="main-navigation">
      <ul className="main-navigation__list">
        <li className="main-navigation__item">
          {pathname && title ? (
            <Link to={pathname}>{title}</Link>
          ) : (
            <form action="/sign_out" method="POST">
              <button className="main-navigation__button" type="submit">
                Sign Out
              </button>
            </form>
          )}
        </li>
      </ul>
    </nav>
  );
}
