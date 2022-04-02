import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function ButtonAction({ type, children }) {
  return (
    <button type={type} className="button-action">
      {children}
    </button>
  );
}
