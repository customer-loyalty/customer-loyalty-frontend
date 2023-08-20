import React from "react";
import styles from "./TableClients.module.css";
import clients from "../../utils/clients.json";

// export default function TableClients() {
//   const res = clients.clients.map((item) => (
//     <tr className={styles.content__row} key={item.id}>
//       <td className={styles.content__data}>{item.reg}</td>
//       <td className={styles.content__data}>{item.phone}</td>
//       <td className={styles.content__data}>{item.cardId}</td>
//       <td className={styles.content__data}>{item.cardType}</td>
//       <td className={styles.content__data}>{item.telegram}</td>
//       <td className={styles.content__data}>{item.gender}</td>
//       <td className={styles.content__data}>{item.surname}</td>
//       <td className={styles.content__data}>{item.name}</td>
//       <td className={styles.content__data}>{item.middleName}</td>
//       <td className={styles.content__data}>{item.birthday}</td>
//       <td className={styles.content__data}>{item.bonusBalance}</td>
//       <td className={styles.content__data}>{item.note || "-"}</td>
//     </tr>
//   ));
//   return (
//     <table className={styles.table}>
//       <thead className={styles.header}>
//         <tr className={styles.header__row}>
//           <td className={styles.header__data}>Дата регистрации</td>
//           <td className={styles.header__data}>Телефон</td>
//           <td className={styles.header__data}>Номер карты</td>
//           <td className={styles.header__data}>Тип карты</td>
//           <td className={styles.header__data}>Телеграм</td>
//           <td className={styles.header__data}>Пол</td>
//           <td className={styles.header__data}>Фамилия</td>
//           <td className={styles.header__data}>Имя</td>
//           <td className={styles.header__data}>Отчество</td>
//           <td className={styles.header__data}>Дата рождения</td>
//           <td className={styles.header__data}>Бонусный баланс</td>
//           <td className={styles.header__data}>Примечание</td>
//         </tr>
//       </thead>
//       <tbody className={styles.content}>{res}</tbody>
//     </table>
//   );
// }
export default function TableClients() {
  const catClients = clients.clients.map((client) => ({
    "Дата регистрации": client.reg,
    Телефон: client.phone,
    "Номер карты": client.cardId,
    "Тип карты": client.cardType,
    Телеграм: client.telegram,
    Пол: client.gender,
    Фамилия: client.surname,
    Имя: client.name,
    Отчество: client.middleName,
    "Дата рождения": client.birthday,
    "Бонусный баланс": client.bonusBalance,
    Примечание: client.note || "-",
  }));

  const catArray = [
    "Дата регистрации",
    "Телефон",
    "Номер карты",
    "Тип карты",
    "Телеграм",
    "Пол",
    "Фамилия",
    "Имя",
    "Отчество",
    "Дата рождения",
    "Бонусный баланс",
    "Примечание",
  ];
  const cats = catArray.map((cat) => (
    <tr>
      <td className={styles.header__data}>{cat}</td>
      {catClients.map((client) => (
        <td className={styles.content__data}>{client[`${cat}`]}</td>
      ))}
    </tr>
  ));
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
    <div>
      <table className={styles.table}>
        <tbody className={styles.content}>{cats}</tbody>
      </table>
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
    </div>
  );
}
