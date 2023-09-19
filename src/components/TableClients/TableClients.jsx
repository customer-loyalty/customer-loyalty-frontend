/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./TableClients.module.css";

export default function TableClients({
  currentItems,
  currentPage,
  paginateActivation,
  paginate,
  totalPages,
  data,
}) {
  const res = currentItems.map((item) => (
    <tr className={styles.content__row} key={item.id}>
      <td className={styles.content__data}>{item.card.cardId}</td>
      <td className={styles.content__data}>{item.reg}</td>
      <td className={styles.content__data}>{item.phone_number}</td>
      <td className={styles.content__data}>{item.card.cardType}</td>
      <td className={styles.content__data}>{item.mail}</td>
      <td className={styles.content__data}>{item.gender}</td>
      <td className={styles.content__data}>{item.surname}</td>
      <td className={styles.content__data}>{item.name}</td>
      <td className={styles.content__data}>{item.birthday}</td>
      <td className={styles.content__data}>{item.card.bonusBalance || 0}</td>
      <td className={styles.content__data}>{item.note || "-"}</td>
    </tr>
  ));
  return (
    <div className={styles.block}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.header__row}>
            <td className={styles.header__data}>Номер карты</td>
            <td className={styles.header__data}>Дата регистрации</td>
            <td className={styles.header__data}>Телефон</td>
            <td className={styles.header__data}>Тип карты</td>
            <td className={styles.header__data}>Почта</td>
            <td className={styles.header__data}>Пол</td>
            <td className={styles.header__data}>Фамилия</td>
            <td className={styles.header__data}>Имя</td>
            <td className={styles.header__data}>Дата рождения</td>
            <td className={styles.header__data}>Бонусный баланс</td>
            <td className={styles.header__data}>Примечание</td>
          </tr>
        </thead>
        <tbody className={styles.content}>{res}</tbody>
      </table>
      {paginateActivation ? (
        <nav className={styles.nav}>
          <button
            className={styles.nav__button}
            onClick={() => paginate(currentPage - 1)}
            type="button"
            disabled={currentPage === 1}
          >
            &lArr; Назад
          </button>
          {data.slice(0, totalPages).map((_, index) => (
            <button
              className={`${styles.nav__digit} ${
                currentPage === index + 1 ? styles.nav__digit_active : ""
              }`}
              type="button"
              onClick={() => paginate(index + 1)}
              key={index}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={styles.nav__button}
            onClick={() => paginate(currentPage + 1)}
            type="button"
            disabled={currentPage === totalPages}
          >
            Вперед &rArr;
          </button>
        </nav>
      ) : null}
    </div>
  );
}
