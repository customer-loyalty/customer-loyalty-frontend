import React from "react";
import styles from "./Account.module.css";
import Headline from "../Headline/Headline";
import ButtonLK from "../ButtonLK/Button";
import editHovered from "../../images/lk/editHovered.svg";
import info from "../../images/lk/info.svg";
import director from "../../images/lk/director.svg";
import contacts from "../../images/lk/contacts.svg";
import card from "../../images/lk/card.jpg";
import Loader from "../Loader/Loader";

export default function Account({
  about,
  cards,
  isLoading,
  openPopupEditAccount,
}) {
  const res = cards.map((item) => (
    <li className={styles.info__point} key={item.id}>
      Уровень {item.id}
      <p className={styles.info__text}>{item.name}</p>
    </li>
  ));
  return (
    <main className={styles.content}>
      <Headline title="Аккаунт" />
      <div className={styles.buttons}>
        <ButtonLK
          img={editHovered}
          style={{ backgroundColor: "#5CA1EA", color: "#FFFFFF" }}
          hoverStyle={{ backgroundColor: "#384098", color: "#FFFFFF" }}
          text="Редактировать"
          onClick={openPopupEditAccount}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.info}>
          <div className={styles.info__card}>
            <div className={styles.info__header}>
              <img className={styles.info__icon} src={info} alt="иконка" />
              <h2 className={styles.info__title}>Информация о компании</h2>
            </div>
            <ul className={styles.info__content}>
              <li className={styles.info__point}>
                Название компании
                <p className={styles.info__text}>ООО «Кофечай»</p>
              </li>
              <li className={styles.info__point}>
                Основной вид деятельности
                <p className={styles.info__text}>{about.activity}</p>
              </li>
              <li className={styles.info__point}>
                Адрес
                <p className={styles.info__text}>{about.adress}</p>
              </li>
            </ul>
          </div>

          <div className={styles.info__card}>
            <div className={styles.info__header}>
              <img className={styles.info__icon} src={contacts} alt="иконка" />
              <h2 className={styles.info__title}>Контакты</h2>
            </div>
            <ul className={styles.info__content}>
              <li className={styles.info__point}>
                Почта
                <p className={styles.info__text}>{about.email}</p>
              </li>
              <li className={styles.info__point}>
                Сайт
                <p className={styles.info__text}>{about.url}</p>
              </li>
            </ul>
          </div>
          <div className={styles.info__card}>
            <div className={styles.info__header}>
              <img className={styles.info__icon} src={director} alt="иконка" />
              <h2 className={styles.info__title}>Директор</h2>
            </div>
            <ul className={styles.info__content}>
              <li className={styles.info__point}>
                ФИО
                <p className={styles.info__text}>
                  {about.last_name} {about.firstname}
                </p>
              </li>
              <li className={styles.info__point}>
                Должность
                <p className={styles.info__text}>Генеральный директор</p>
              </li>
            </ul>
          </div>
          <div className={styles.info__card}>
            <div className={styles.info__header}>
              <img className={styles.info__icon} src={card} alt="иконка" />
              <div className={styles.info__headerText}>
                <h2 className={styles.info__title}>Карты</h2>
                <p className={styles.info__subtitle}>
                  Всего карт: {cards.length}
                </p>
              </div>
            </div>
            <ul className={styles.info__content}>{res}</ul>
          </div>
        </div>
      )}
    </main>
  );
}
