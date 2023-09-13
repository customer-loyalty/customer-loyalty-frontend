import React from "react";
import styles from "./AddClient.module.scss";
import Input from "../../utils/Input/Input";
import Radio from "../../utils/radio/Radio";
import tick from "../../images/shape.svg";

function AddClient() {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Добавление нового клиента</h1>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <div>
            <Input heading="Дата регистрации" placeholder="01.01.2000" />
            <Input heading="Номер телефона" placeholder="+7 (___) ___-__-__" />
            <Input heading="Номер карты" placeholder="1234" />
            <Radio
              name="Тип карты"
              varOne="Стандартная"
              varTwo="Продвинутая"
              radioName="cardType"
            />
            <Input heading="Бонусный баланс" placeholder="100" />
            <Input heading="Телеграм" placeholder="Введите ник" />
          </div>
          <div>
            <Input heading="Фамилия" placeholder="Введите фамилию клиента" />
            <Input heading="Имя" placeholder="Введите имя клиента" />
            <Input heading="Отчество" placeholder="Введите отчество клиента" />
            <Radio name="Пол" varOne="М" varTwo="Ж" radioName="gender" />
            <Input heading="Дата рождения" placeholder="__.__.____" />
            <Input
              heading="Примечание"
              placeholder="Оставьте заметки о клиенте"
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          <img src={tick} alt="Подтвердить" /> Добавить клиента
        </button>
      </form>
    </div>
  );
}

export default AddClient;
