import React, {useEffect, useState} from "react";
import styles from './menu.module.scss';
import userImage from '../../images/user__image.jpg';

function Menu() {
    const [burgerImageVisible, setBurgerImageVisible] = useState(true);
    const [isDisplayNone, setIsDisplayNone] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const buttonLabel = burgerImageVisible ? "Открыть меню" : "Закрыть меню";
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (width < 391) {
            setBurgerImageVisible(false);
            setIsDisplayNone(true);
        } else {
            setBurgerImageVisible(true);
            setIsDisplayNone(false);
        }
    }, [width])
    const handleBurgerClick = () => {
        if(burgerImageVisible){
            setTimeout(() => {
                setIsDisplayNone(true);
            }, 1600)
            setBurgerImageVisible(!burgerImageVisible);
        }
        if(!burgerImageVisible) {
            setIsDisplayNone(false);
            setTimeout(() => {
                setBurgerImageVisible(!burgerImageVisible);
            }, 0)
        }
    };
    const handleBurgerKeyDown = (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            handleBurgerClick();
        }
    }

    return (
        <div className={`${styles.menu} ${burgerImageVisible ? styles.menu_open : ''}`}>
            <div className={styles.menu__container}
            style={{rowGap: (height < 760 && width> 390) && 20}}>
                <div className={styles.logo}>
                    <div className={styles.logo__icon}/>
                    <p className={styles.logo__text}>LOGO</p>
                </div>
                <div className={
                    `${styles.user} ${!burgerImageVisible ? styles.menu__user_opacity : ''}
                    ${isDisplayNone ? styles.menu_none : ''}`
                }>
                    <img className={styles.user__image} src={userImage} alt='картинка профиля'/>
                    <div className={styles.user__info}>
                        <p className={styles.user__name}>Любовь Светлова</p>
                        <p className={styles.user__role}>Администратор</p>
                    </div>
                </div>
                <menu className={
                    `${styles.menu__nav} 
                    ${!burgerImageVisible ? styles.menu__nav_opacity : ''}
                    ${isDisplayNone ? styles.menu_none : ''}`
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
                <div className={
                    `${styles.telephoneInfo} 
                ${!burgerImageVisible ? styles.menu__telephoneInfo_opacity : ''}
                ${isDisplayNone ? styles.menu_none : ''}
                `}>
                    <p className={styles.telephoneText}>Нужна помощь? Звоните</p>
                    <a className={styles.telephoneContact} href='tel:+79002541414'>8(900)254-14-14</a>
                </div>
                <div className={styles.menu__footer}
                     onClick={handleBurgerClick}
                     onKeyDown={handleBurgerKeyDown}
                     role="button"
                     tabIndex={0}
                     aria-label={buttonLabel}
                >
                    <div className={styles.menu__footerContainer}>
                        <div className={`${styles.menu__exitBurger} ${burgerImageVisible ? styles.menu__openBurger : ''}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;