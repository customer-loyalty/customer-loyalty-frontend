/* eslint-disable react/prop-types */
import React from "react";
import styles from "./EditClient.module.scss";

function EditClient({ popupEditClientActive, closePopup }) {

    return (
        <div
            className={popupEditClientActive ? styles.section_active : styles.section}
        >
            <div className={styles.writeOffBonusesContainer}>
                <div className={styles.writeOffBonusesIcon}/>
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
                Тип карты: <div className={styles.userCardIcon}/> <span className={styles.userInfo_bold}>Стандарт</span>
            </p>
            <p className={styles.userInfo}>
                Количество бонусов: <span className={styles.userInfo_bold}>1024</span>
            </p>
            <form className={styles.form} id="formAddClient">
                <div className={styles.newCheckContainer}>
                    <p className={styles.newCheck}>Новый чек</p>
                    <input
                        type="number"
                        className={styles.newCheckNumber}
                        name='newCheck'
                        value='0'
                    />
                    <p className={styles.newCheckSubtitle}>Введите сумму покупки</p>
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Сумма чека, ₽ *</p>
                    <input
                        type="number"
                        className={styles.input}
                        placeholder="Введите сумму чека"
                        name="check"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Фамилия *</p>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Введите фамилию клиента"
                        name="surname"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Имя *</p>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Введите имя клиента"
                        name="name"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Дата рождения *</p>
                    <input
                        type="data"
                        className={styles.input}
                        placeholder="__.__.____"
                        name="birthday"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Почта *</p>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Введите email"
                        name="mail"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Номер телефона *</p>
                    <input
                        type="number"
                        className={styles.input}
                        placeholder="+7 (___) ___-__-__"
                        name="phone"
                    />
                </div>
                <div className={styles.formElementContainer}>
                    <p className={styles.titleInput}>Примечание</p>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Оставьте заметки о клиенте"
                        name="note"
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
                >
                    <div className={styles.submitBtnIcon} />
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
}

export default EditClient;
