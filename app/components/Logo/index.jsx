import { Link } from "remix";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Logo({ to }) {
  return (
    <div className="logo">
      <Link to={to}>Bookmarks</Link>
    </div>
  );
}

Logo.defaultProps = {
  to: "/",
};
