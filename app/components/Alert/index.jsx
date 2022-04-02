import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function Alert({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  const divClass = classNames({
    alert: true,
    "alert--visible": isVisible,
  });

  const onHideAlert = () => setIsVisible(false);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={divClass}>
      <p className="alert__message">
        <span className="alert__icon" />
        {message}
      </p>
      <button
        className="alert__trigger"
        type="button"
        aria-label="Close alert"
        onClick={onHideAlert}
      >
        <span className="sr-only">x</span>
      </button>
    </div>
  );
}
