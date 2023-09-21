import React, {useState} from "react";
import styles from './EditAccount.module.scss';

function EditAccount({closePopup}){
    const [account, setAccount] = useState({
        nameCompany: '',
        activity: '',
        address: '',
        director: '',
        jobTitle: '',
        email: '',
        site: ''
    })

    const handleChangeInputAccount = (e) => {
        const {name, value} = e.target;
        setAccount({...account, [name]: value})
    }

    return (
        <div className={styles.editAccount}>
            <h2 className={styles.editAccountTitle}>Редактирование аккаунта</h2>
            <form action="#" className={styles.form} id='formEditAccount'>
                <div className={styles.formBlock}>
                    <p className={styles.formTitle}>Информация о компании</p>
                    <div className={styles.formInputInfo}>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Название компании</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       name='nameCompany'
                                       placeholder=""
                                       minLength={2}
                                       maxLength={30}
                                       value={account.nameCompany}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Основной вид деятельности</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       name='activity'
                                       placeholder=""
                                       minLength={2}
                                       maxLength={30}
                                       value={account.activity}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Адрес</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       placeholder=""
                                       name='address'
                                       minLength={2}
                                       maxLength={50}
                                       value={account.address}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <p className={styles.formTitle}>Директор</p>
                    <div className={styles.formInputInfo}>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>ФИО</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       placeholder=""
                                       name="director"
                                       minLength={2}
                                       maxLength={30}
                                       value={account.director}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Должность</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       placeholder=""
                                       name='jobTitle'
                                       minLength={2}
                                       maxLength={30}
                                       value={account.jobTitle}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <p className={styles.formTitle}>Контакты</p>
                    <div className={styles.formInputInfo}>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Почта</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="email"
                                       placeholder=""
                                       minLength={2}
                                       maxLength={30}
                                       name='email'
                                       value={account.email}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Сайт</p>
                            <div className={styles.inputLine}>
                                <input className={styles.input}
                                       type="text"
                                       placeholder=""
                                       minLength={2}
                                       maxLength={30}
                                       name='site'
                                       value={account.site}
                                       onChange={handleChangeInputAccount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <p className={styles.formTitle}>Карты</p>
                    <div className={styles.formInputInfo}>
                        <div className={styles.formInputBlock}>
                            <p className={styles.titleInput}>Уровень 1</p>
                            <label className={styles.formLabel} htmlFor="formEditAccount">
                                <input
                                    className={styles.checkboxInput}
                                    type="radio"
                                    name="level"
                                    value='standard'
                                    defaultChecked
                                />Стандартная
                            </label>
                            <label className={styles.formLabel} htmlFor="formEditAccount">
                                <input
                                    type="radio"
                                    name="level"
                                    value='advanced'
                                />Продвинутая
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.formFooter}>
                <button className={styles.cancelBtn} type="button" onClick={closePopup}>
                    Отменить
                </button>
                <button
                    className={styles.submitBtn}
                    type="submit"
                    form="formEditAccount"
                >
                    <div className={styles.submitBtnIcon} />
                    Сохранить изменения
                </button>
            </div>
        </div>
    )
}

export default EditAccount;
