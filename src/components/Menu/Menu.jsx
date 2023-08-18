import React, {useState} from "react";
import styles from './menu.module.scss';
import userImage from '../../images/user__image.jpg';



function Menu() {
    const [burgerImageVisible, setBurgerImageVisible] = useState(false);
    const buttonLabel = burgerImageVisible ? "Открыть меню" : "Закрыть меню";

    const handleBurgerClick = () => {
        setBurgerImageVisible(!burgerImageVisible);
    };
    const handleBurgerKeyDown = (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            handleBurgerClick();
        }
    }

    return (
        <div className={`${styles.menu} ${burgerImageVisible && styles.menu_open}`}>
            <div className={styles.menu__container}>
                <div className={styles.logo}
                     onClick={handleBurgerClick}
                     onKeyDown={handleBurgerKeyDown}
                     role="button"
                     tabIndex={0}
                     aria-label={buttonLabel}
                >
                    <div className={styles.logo__icon}/>
                    <p className={styles.logo__text}>LOGO</p>
                </div>
                <div className={`${styles.user} ${!burgerImageVisible && styles.menu_opacity}`}>
                    <img className={styles.user__image} src={userImage} alt='картинка профиля'/>
                    <div className={styles.user__info}>
                        <p className={styles.user__name}>Любовь Светлова</p>
                        <p className={styles.user__role}>Администратор</p>
                    </div>
                </div>
                <menu className={
                    `${styles.menu__nav} 
                    ${!burgerImageVisible && styles.menu_opacityFast}`
                }>
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
            <div className={`${styles.telephoneInfo} ${!burgerImageVisible && styles.menu_opacity}`}>
                <p className={styles.telephoneText}>Нужна помощь? Звоните</p>
                <a className={styles.telephoneContact} href='tel:+79002541414'>8(900)254-14-14</a>
            </div>
            <div className={`${styles.menu__exitBurger} ${burgerImageVisible && styles.menu__openBurger}`}
                 onClick={handleBurgerClick}
                 onKeyDown={handleBurgerKeyDown}
                 role="button"
                 tabIndex={0}
                 aria-label={buttonLabel}
            />
        </div>
    )
}

export default Menu;