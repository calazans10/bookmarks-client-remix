import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function InlineForm({ action, children }) {
  return (
    <form action={action} method="POST" className="inline-form">
      {children}
    </form>
  );
}
