import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function PageSection({ title, children }) {
  return (
    <section className="page-section">
      <h1 className="page-section__title">{title}</h1>
      {children}
    </section>
  );
}
