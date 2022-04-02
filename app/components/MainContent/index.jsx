import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function MainContent({ children }) {
  return <main className="main-content">{children}</main>;
}
