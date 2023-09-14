/* eslint-disable react/prop-types */
import React from "react";
import styles from "./MailingCard.module.css";
import ToggleCheckbox from "../ToggleCheckbox/ToggleCheckbox";

export default function MailingCard({ title, message }) {
  return (
    <div className={styles.card}>
      <ToggleCheckbox />
      <div className={styles.card__text}>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>Шаблон сообщения</p>
        <p className={styles.card__message}>{message}</p>
      </div>
    </div>
  );
}
