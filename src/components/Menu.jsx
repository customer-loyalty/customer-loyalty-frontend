import React, {useState} from "react";
import './menu.css';

function Menu() {
    const [isActiveMenu, setActiveMenu] = useState(true);
    const buttonLabel = isActiveMenu ? "Закрыть меню" : "Открыть меню";

    const handleMenu = () => {
        setActiveMenu(!isActiveMenu);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            setActiveMenu(false);
        } else if(event.key === 'ArrowRight') {
            setActiveMenu(true);
        }
    }
    return (
        <div className={`menu ${!isActiveMenu && 'menu_hidden'}`}>
            <div
                className={isActiveMenu ? 'menu__hidden-icon' : 'menu__open-icon'}
                onClick={handleMenu}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0} // Allow element to be focused
                aria-label={buttonLabel} // Добавлен атрибут aria-label для связи с элементом управления//
            />
            <div className={`menu__container ${!isActiveMenu && 'menu_text-opacity'}`}>
                <h1 className='menu__title'>Основное</h1>
                <nav className='menu__nav'>
                    <ul className='menu__list'>
                        <li className='menu__item menu__item_active'>
                            <div className='menu__icon-users'/>
                            <p className='menu__text'>Клиенты</p>
                        </li>
                        <li className='menu__item'>
                            <div className='menu__icon-briefcase'/>
                            <p className='menu__text'>Лояльность</p>
                        </li>
                        <li className='menu__item'>
                            <div className='menu__icon-users'/>
                            <p className='menu__text'>Карты</p>
                        </li>
                        <li className='menu__item'>
                            <div className='menu__icon-users'/>
                            <p className='menu__text'>Уровни</p>
                        </li>
                        <li className='menu__item'>
                            <div className='menu__icon-users'/>
                            <p className='menu__text'>Аккаунт</p>
                        </li>
                        <li className='menu__item'>
                            <div className='menu__icon-users'/>
                            <p className='menu__text'>Баланс</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;
