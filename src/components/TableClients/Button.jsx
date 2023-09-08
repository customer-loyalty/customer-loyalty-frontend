/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.css";

export default function TableClients({ img, light }) {
  return (
    <button
      className={`${styles.button} ${light && styles.button_light}`}
      type="button"
    >
      <img src={img} alt="добавить клиента" />
      Добавить клиента
    </button>
  );
}
