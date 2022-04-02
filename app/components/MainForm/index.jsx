import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function MainForm({ legend, children }) {
  return (
    <form autoComplete="off" noValidate className="main-form" method="POST">
      <fieldset>
        <legend className="main-form__legend">{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
}
