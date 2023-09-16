import React from "react";
import styles from "./AddClient.module.scss";

function AddClient({popupAddClientActive, closePopup}) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <div className={ popupAddClientActive ? styles.section_active : styles.section}>
      <h1 className={styles.heading}>Добавление нового клиента</h1>
      <p className={styles.userInfo}>Дата регистрации: <span className={styles.userInfo_bold}>31 авг. 2023</span></p>
      <p className={styles.userInfo}>Номер карты: <span className={styles.userInfo_bold}>0004</span></p>
      <form className={styles.form} id='formAddClient'>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Сумма чека, ₽ *</p>
            <input
                type="number
                " className={styles.input
            } placeholder='Введите сумму чека'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Фамилия *</p>
            <input
                type="text"
                className={styles.input}
                placeholder='Введите фамилию клиента'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Имя *</p>
            <input
                type="text"
                className={styles.input}
                placeholder='Введите имя клиента'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Дата рождения *</p>
            <input
                type="data"
                className={styles.input}
                placeholder='__.__.____'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Почта *</p>
            <input
                type="email"
                className={styles.input}
                placeholder='Введите email'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Номер телефона *</p>
            <input
                type="number"
                className={styles.input}
                placeholder='+7 (___) ___-__-__'/>
          </div>
          <div className={styles.formElementContainer}>
            <p className={styles.titleInput}>Примечание</p>
            <input
                type="text"
                className={styles.input}
                placeholder='Оставьте заметки о клиенте'/>
          </div>
        </form>
        <div className={styles.formFooter}>
            <button className={styles.cancelBtn} onClick={closePopup}>Отменить</button>
            <button className={styles.submitBtn} type="submit" form='formAddClient'>
                <div className={styles.submitBtnIcon}></div>
                Сохранить изменения</button>
        </div>
    </div>
  );
}

export default AddClient;
