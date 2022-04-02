import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Table({ children }) {
  return <table className="table">{children}</table>;
}
