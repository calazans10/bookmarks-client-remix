import { Link } from "remix";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function ButtonLink({ to, children }) {
  return (
    <Link to={to} className="button-link">
      {children}
    </Link>
  );
}
