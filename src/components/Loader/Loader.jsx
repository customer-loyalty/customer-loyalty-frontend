import React from "react";
import styles from "./Loader.module.css";

export default function Mailing() {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__elem} />
    </div>
  );
}
