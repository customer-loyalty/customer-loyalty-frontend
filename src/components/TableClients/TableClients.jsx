import React, { useState } from "react";
import styles from "./TableClients.module.css";
import clients from "../../utils/clients.json";
import search from "./search.svg";
import shape from "./shape.svg";
import exel from "./exel.svg";
import filter from "./filter.svg";
// import exelLight from "./exelLight.svg";
import filterLight from "./filterLight.svg";
import Button from "./Button";

export default function TableClients() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [data] = useState(clients.clients);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // eslint-disable-next-line array-callback-return
  // const filteredData = data.filter((row) => {
  //   console.log(searchValue.toLowerCase(), row.name.toLowerCase());
  // });
  // const filteredData = data.filter((row) =>
  //   row.name.toLowerCase().includes(searchValue.toLowerCase())
  // );
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <Button img={shape} />
      <Button img={exel} light lightImg={filterLight} />
      <Button img={filter} light lightImg={filterLight} />
      {/* <button className={styles.button} type="button">
        <img src={shape} alt="добавить клиента" />
        Добавить клиента
      </button>
      <button className={styles.button} type="button">
        <img src={shape} alt="добавить клиента" />
        Добавить клиента
      </button> */}
      <div className={styles.search}>
        <input
          className={styles.search__input}
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Поиск"
        />
        <img className={styles.search__img} src={search} alt="поиск" />
      </div>
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
