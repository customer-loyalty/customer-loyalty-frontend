/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Headline.module.css";
import help from "../../images/lk/help.svg";

export default function Headline({ title }) {
  return (
    <div className={styles.headline}>
      <h1 className={styles.headline__header}>{title}</h1>
      <div className={styles.operator}>
        <img
          className={styles.operator__img}
          src={help}
          alt="Звонок оператору"
        />
        <div className={styles.operator__textSection}>
          <p className={styles.operator__text}>Нужна помощь? Звоните</p>
          <p className={styles.operator__number}>8(900)254-14-14</p>
        </div>
      </div>
    </div>
  );
}
