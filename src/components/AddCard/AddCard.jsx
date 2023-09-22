import React, { useState } from "react";
import styles from "./AddCard.module.scss";

function AddCard({ popupAddCardActive, closePopup }) {
  const [check, setCheck] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
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
  return (
    <div
      className={popupAddCardActive ? styles.section_active : styles.section}
    >
      <h1 className={styles.heading}>Создание новой карты</h1>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Основные параметры
      </h2>
      <form className={styles.form} id="formAddClient">
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Название карты</p>
          <input
            type="number"
            className={styles.input}
            placeholder="Введите название карты"
            name="check"
            value={check}
            onChange={handleCheckChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Выдавать карту</p>
          <input
            type="text"
            className={styles.input}
            placeholder="При регистрации"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Стартовые бонусы</p>
          <input
            type="text"
            className={styles.input}
            placeholder="При регистрации"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Начисление бонусов</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Процент от суммы покупки"
            name="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Сгорание бонусов</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Не сгорают"
            name="mail"
            value={mail}
            onChange={handleMailChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Списание бонусов</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Запретить использование"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
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
          Создать карту
        </button>
      </div>
    </div>
  );
}

export default AddCard;
