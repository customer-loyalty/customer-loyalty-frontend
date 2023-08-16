import React from "react";
import styles from './menu.module.scss';
import userImage from '../images/user__image.jpg';

function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__container}>
                <div className={styles.logo}>
                    <div className={styles.logo__icon}/>
                    <p className={styles.logo__text}>LOGO</p>
                </div>
                <div className={styles.user}>
                    <img className={styles.user__image} src={userImage} alt='картинка профиля'/>
                    <div className={styles.user__info}>
                        <p className={styles.user__name}>Любовь Светлова</p>
                        <p className={styles.user__role}>Администратор</p>
                    </div>
                </div>
                <menu className={styles.menu__nav}>
                    <ul className={styles.menu__list}>
                        <li className={`${styles.menu__item} ${styles.menu__item_active}`}>
                            <div className={styles.menu__iconCustmer}/>
                            <p className={styles.menu__text}>Клиенты</p>
                        </li>
                        <li className={styles.menu__item}>
                            <div className={styles.menu__iconCards}/>
                            <p className={styles.menu__text}>Карты</p>
                        </li>
                        <li className={styles.menu__item}>
                            <div className={styles.menu__iconProfile}/>
                            <p className={styles.menu__text}>Аккаунт</p>
                        </li>
                        <li className={styles.menu__item}>
                            <div className={styles.menu__iconExit}/>
                            <p className={`${styles.menu__text} ${styles.menu__text_exit}`}>Выйти</p>
                        </li>
                    </ul>
                </menu>
            </div>
            <div>
                <p className={styles.telephoneText}>Нужна помощь? Звоните</p>
                <a className={styles.telephoneContact} href='tel:+79002541414'>8(900)254-14-14</a>
            </div>
        </div>
    )
}

export default Menu;