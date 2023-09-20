import React, { useState } from "react";
import styles from "./AddClient.module.scss";
import { api } from "../../utils/Api";

function AddClient({ popupAddClientActive, closePopup }) {
  const [check, setCheck] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const reg = new Date();
  function handleSubmit(e) {
    e.preventDefault();
    api
      .postClient(check, surname, name, birthday, mail, reg, `/+${phone}`, note)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    closePopup();
  }
  function handleCheckChange(e) {
    setCheck(e.target.value);
  }
  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleBirthdayChange(e) {
    setBirthday(e.target.value);
  }
  function handleMailChange(e) {
    setMail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleNoteChange(e) {
    setNote(e.target.value);
  }
  return (
    <div
      className={popupAddClientActive ? styles.section_active : styles.section}
    >
      <h1 className={styles.heading}>Добавление нового клиента</h1>
      <p className={styles.userInfo}>
        Дата регистрации:{" "}
        <span className={styles.userInfo_bold}>31 авг. 2023</span>
      </p>
      <p className={styles.userInfo}>
        Номер карты: <span className={styles.userInfo_bold}>0004</span>
      </p>
      <form className={styles.form} id="formAddClient">
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Сумма чека, ₽ *</p>
          <input
            type="number"
            className={styles.input}
            placeholder="Введите сумму чека"
            name="check"
            value={check}
            onChange={handleCheckChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Фамилия *</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите фамилию клиента"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Имя *</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите имя клиента"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Дата рождения *</p>
          <input
            type="data"
            className={styles.input}
            placeholder="__.__.____"
            name="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Почта *</p>
          <input
            type="email"
            className={styles.input}
            placeholder="Введите email"
            name="mail"
            value={mail}
            onChange={handleMailChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Номер телефона *</p>
          <input
            type="number"
            className={styles.input}
            placeholder="+7 (___) ___-__-__"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Примечание</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Оставьте заметки о клиенте"
            name="note"
            value={note}
            onChange={handleNoteChange}
          />
        </div>
      </form>
      <div className={styles.formFooter}>
        <button className={styles.cancelBtn} type="button" onClick={closePopup}>
          Отменить
        </button>
        <button
          className={styles.submitBtn}
          type="submit"
          form="formAddClient"
          onClick={handleSubmit}
        >
          <div className={styles.submitBtnIcon} />
          Сохранить изменения
        </button>
      </div>
    </div>
  );
}

export default AddClient;
