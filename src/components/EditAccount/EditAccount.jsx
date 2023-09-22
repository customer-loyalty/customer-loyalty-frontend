import React, { useState } from "react";
import styles from "./EditAccount.module.scss";

function EditAccount({ popupEditAccountActive, closePopup }) {
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
      className={
        popupEditAccountActive ? styles.section_active : styles.section
      }
    >
      <h1 className={styles.heading}>Редактирование аккаунта</h1>
      <form className={styles.form} id="formAddClient">
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Название компании</p>
          <input
            type="number"
            className={styles.input}
            placeholder="Введите название компании"
            name="check"
            value={check}
            onChange={handleCheckChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Основной вид деятельности</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите вид деятельности"
            name="surname"
            value={surname}
            onChange={handleSurnameChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Адрес</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите адрес"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>ФИО</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите ФИО"
            name="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Должность</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите должность"
            name="mail"
            value={mail}
            onChange={handleMailChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Почта</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите почту"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Сайт</p>
          <input
            type="text"
            className={styles.input}
            placeholder="Введите сайт"
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
          Сохранить изменения
        </button>
      </div>
    </div>
  );
}

export default EditAccount;
