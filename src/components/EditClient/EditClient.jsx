import React from "react";
import styles from "./EditClient.module.scss";
import { api } from "../../utils/Api";

function EditClient({
  popupEditClientActive,
  closePopup,
  check,
  setCheck,
  surname,
  setSurname,
  name,
  setName,
  birthday,
  setBirthday,
  mail,
  setMail,
  phone,
  setPhone,
  note,
  setNote,
  id,
}) {
  const reg = new Date();
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
  function handleSubmit(e) {
    e.preventDefault();
    api
      .patchClient(
        id,
        check,
        surname,
        name,
        birthday,
        mail,
        reg,
        `/+${phone}`,
        note
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    closePopup();
  }
  return (
    <div
      className={popupEditClientActive ? styles.section_active : styles.section}
    >
      <div className={styles.writeOffBonusesContainer}>
        <div className={styles.writeOffBonusesIcon} />
        <p className={styles.writeOffBonusesText}>Списать бонусы</p>
      </div>
      <h1 className={styles.heading}>Редактирование клиента</h1>
      <p className={styles.userInfo}>
        Дата регистрации:{" "}
        <span className={styles.userInfo_bold}>31 авг. 2023</span>
      </p>
      <p className={styles.userInfo}>
        Номер карты: <span className={styles.userInfo_bold}>0004</span>
      </p>
      <p className={styles.userInfo}>
        {/* Тип карты: <div className={styles.userCardIcon}/> <span className={styles.userInfo_bold}>Стандарт</span> */}
        Тип карты: <span className={styles.userInfo_bold}>Стандарт</span>
      </p>
      <p className={styles.userInfo}>
        Количество бонусов: <span className={styles.userInfo_bold}>1024</span>
      </p>
      <form className={styles.form} id="formAddClient">
        <div className={styles.newCheckContainer}>
          <p className={styles.newCheck}>Новый чек</p>
          <input
            type="text"
            className={styles.newCheckNumber}
            name="newCheck"
            value={check}
            onChange={handleCheckChange}
          />
          <p className={styles.newCheckSubtitle}>Введите сумму покупки</p>
        </div>
        {/* <div className={styles.formElementContainer}>
          <p className={styles.titleInput}>Сумма чека, ₽ *</p>
          <input
            type="number"
            className={styles.input}
            placeholder="Введите сумму чека"
            name="check"
          />
        </div> */}
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
            type="text"
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

export default EditClient;
