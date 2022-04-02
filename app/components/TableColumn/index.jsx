import classNames from "classnames";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function TableColumn({ label, hasActions, children }) {
  const tdClass = classNames({
    "table-column": true,
    "table-column--actions": hasActions,
  });

  return (
    <td className={tdClass} data-label={label}>
      {children}
    </td>
  );
}

TableColumn.defaultProps = {
  hasActions: false,
};
