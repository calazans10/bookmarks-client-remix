import { useState } from "react";
import styles from "./styles.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export function FormControl({
  name,
  label,
  type,
  defaultValue,
  error,
  autoFocus,
  disabled,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isInvalid = error && !isFocused;

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="form-control__label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        className="form-control__input"
      />
      {isInvalid && (
        <span className="form-control__error-message">{error}</span>
      )}
    </div>
  );
}

FormControl.defaultProps = {
  label: "",
  type: "tel",
  autoFocus: false,
  disabled: false,
};
