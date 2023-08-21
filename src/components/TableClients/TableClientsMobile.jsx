import React from "react";
import styles from "./TableClients.module.css";
import clients from "../../utils/clients.json";

export default function TableClients() {
  const newClientsArray = clients.clients.map((client) => ({
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
    id: client.id,
  }));

  const categories = [
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
  const tableData = categories.map((categorie) => (
    <tr key={categories.indexOf(categorie)}>
      <td className={styles.header__data}>{categorie}</td>
      {newClientsArray.map((client) => (
        <td
          style={{ backgroundColor: "#ffffff" }}
          className={styles.content__data}
          key={client.id}
        >
          {client[`${categorie}`]}
        </td>
      ))}
    </tr>
  ));
  return (
    <table
      style={{ height: "auto" }}
      className={`${styles.table} ${styles.table__mobile}`}
    >
      <tbody className={styles.content}>{tableData}</tbody>
    </table>
  );
}
