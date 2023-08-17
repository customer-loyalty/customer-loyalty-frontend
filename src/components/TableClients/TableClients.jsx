import React from "react";
import styles from "./TableClients.module.css";
import clients from "../../utils/clients.json";

export default function TableClients() {
  const res = clients.clients.map((item) => (
    <tr className={styles.content__row} key={item.id}>
      <td className={styles.content__data}>{item.reg}</td>
      <td className={styles.content__data}>{item.phone}</td>
      <td className={styles.content__data}>{item.cardId}</td>
      <td className={styles.content__data}>{item.cardType}</td>
      <td className={styles.content__data}>{item.telegram}</td>
      <td className={styles.content__data}>{item.gender}</td>
      <td className={styles.content__data}>{item.surname}</td>
      <td className={styles.content__data}>{item.name}</td>
      <td className={styles.content__data}>{item.middleName}</td>
      <td className={styles.content__data}>{item.birthday}</td>
      <td className={styles.content__data}>{item.bonusBalance}</td>
      <td className={styles.content__data}>{item.note || "-"}</td>
    </tr>
  ));
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.header__row}>
          <td className={styles.header__data}>Дата регистрации</td>
          <td className={styles.header__data}>Телефон</td>
          <td className={styles.header__data}>Номер карты</td>
          <td className={styles.header__data}>Тип карты</td>
          <td className={styles.header__data}>Телеграм</td>
          <td className={styles.header__data}>Пол</td>
          <td className={styles.header__data}>Фамилия</td>
          <td className={styles.header__data}>Имя</td>
          <td className={styles.header__data}>Отчество</td>
          <td className={styles.header__data}>Дата рождения</td>
          <td className={styles.header__data}>Бонусный баланс</td>
          <td className={styles.header__data}>Примечание</td>
        </tr>
      </thead>
      <tbody className={styles.content}>{res}</tbody>
    </table>
  );
}
