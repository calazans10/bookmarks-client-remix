import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function MainHeader({ children }) {
  return (
    <header className="main-header">
      <div className="main-header__container">{children}</div>
    </header>
  );
}
