import React from "react";
import styles from "./Main.module.scss";
import TableClients from "../TableClients/TableClients";
import TableClientsMobile from "../TableClients/TableClientsMobile";
import addIcon from "../../images/icon_plus.svg";

function Main() {
  return (
    <main className={styles.main__container}>
      <div className={styles.main__addContainer}>
        <h1 className={styles.main__headline}>Клиенты</h1>
        <button className={styles.main__button} type="submit">
          <img src={addIcon} alt="Добавить клиента" /> Добавить клиента
        </button>
      </div>
      <div className={styles.main__table}>
        <p className={styles.main__clientCounter}>Всего клиентов: 3</p>
        <TableClients />
        <TableClientsMobile />
      </div>
    </main>
  );
}

export default Main;
