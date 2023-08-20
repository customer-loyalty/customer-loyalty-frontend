import React from "react";
import styles from "./Main.module.scss";
// import TableClients from "../TableClients/TableClients";
import TableClientsOld from "../TableClients/TableClientsOld";
import addIcon from "../../images/icon_plus.svg";
// import TableClientsMobile from "../TableClients/TableClientsMobile";

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
        {/* <TableClients /> */}
        {/* <TableClientsMobile /> */}
        <TableClientsOld />
      </div>
    </main>
  );
}

export default Main;
