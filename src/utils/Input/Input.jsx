import React from "react";
import styles from "./Input.module.scss";

function Input({ heading, placeholder }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <div className={styles.input__container}>
      <p className={styles.input__heading}>{heading}</p>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
}

export default Input;
