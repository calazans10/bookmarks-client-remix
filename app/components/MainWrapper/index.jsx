import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function MainWrapper({ children }) {
  return <div className="main-wrapper">{children}</div>;
}
