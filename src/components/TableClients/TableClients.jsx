/* eslint-disable react/prop-types */
import React from "react";
import styles from "./TableClients.module.css";

// import Button from "./Button";

export default function TableClients({
  currentItems,
  currentPage,
  paginate,
  totalPages,
  data,
}) {
  // const filteredData = data.filter((row) => {
  //   console.log(searchValue.toLowerCase(), row.name.toLowerCase());
  // });
  // const filteredData = data.filter((row) =>
  //   row.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // const showEllipsis = totalPages > 6;
  // const res = currentItems.map((item) => (
  const res = currentItems.map((item) => (
    <tr className={styles.content__row} key={item.id}>
      <td className={styles.content__data}>{item.cardId}</td>
      <td className={styles.content__data}>{item.reg}</td>
      <td className={styles.content__data}>{item.phone}</td>
      <td className={styles.content__data}>{item.cardType}</td>
      <td className={styles.content__data}>{item.telegram}</td>
      <td className={styles.content__data}>{item.gender}</td>
      <td className={styles.content__data}>{item.surname}</td>
      <td className={styles.content__data}>{item.name}</td>
      <td className={styles.content__data}>{item.birthday}</td>
      <td className={styles.content__data}>{item.bonusBalance}</td>
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
      <nav className={styles.nav}>
        <button
          className={styles.nav__button}
          onClick={() => paginate(currentPage - 1)}
          type="button"
          disabled={currentPage === 1}
        >
          &lArr; Назад
        </button>
        {/* {currentPage > 1 && (
          <button
            className={styles.nav__digit}
            type="button"
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
        )}
        {showEllipsis && currentPage > 2 && <span>...</span>}
        {currentPage > 2 && (
          <button
            className={styles.nav__digit}
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {currentPage - 1}
          </button>
        )}
        <button className={styles.nav__digit} type="button" disabled>
          {currentPage}
        </button>
        {currentPage < totalPages - 1 && (
          <button
            className={styles.nav__digit}
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </button>
        )}
        {showEllipsis && currentPage < totalPages - 1 && <span>...</span>}
        {currentPage < totalPages && (
          <button
            className={styles.nav__digit}
            type="button"
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        )} */}
        {data.slice(0, totalPages).map((_, index) => (
          <button
            className={`${styles.nav__digit} ${
              currentPage === index + 1 ? styles.nav__digit_active : ""
            }`}
            type="button"
            onClick={() => paginate(index + 1)}
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
    </div>
  );
}
