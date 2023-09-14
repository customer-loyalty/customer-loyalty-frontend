/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styles from "./ToggleCheckbox.module.css";

export default function ToggleCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  );
}
