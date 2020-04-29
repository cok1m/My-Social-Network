import React from "react";
import styles from "./FormsControl.module.css";

export const FormElement = (Element) => ({
  input,
  meta: { touched, error },
  type,
  placeholder,
  autoFocus = false,
}) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <Element
        {...input}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      {hasError && <span>{error}</span>}
    </div>
  );
};
