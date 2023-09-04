import React from "react";
import styles from "./Radio.module.scss";

function Radio({ name, varOne, varTwo, radioName }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <div className={styles.radio__container}>
      <p className={styles.radio__name}>{name}</p>
      <div className={styles.radio__varContainer}>
        <input className={styles.radio} type="radio" name={radioName} />
        <p className={styles.radio__varName}>{varOne}</p>
      </div>
      <div className={styles.radio__varContainer}>
        <input className={styles.radio} type="radio" name={radioName} />
        <p className={styles.radio__varName}>{varTwo}</p>
      </div>
    </div>
  );
}

export default Radio;
