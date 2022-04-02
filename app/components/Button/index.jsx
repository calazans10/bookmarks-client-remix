import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Button({ type, children }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}
