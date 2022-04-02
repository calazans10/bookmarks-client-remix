import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function TableRow({ children }) {
  return <tr className="table-row">{children}</tr>;
}
