/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Card.module.css";
import deleteImg from "../../images/lk/deleteImg.svg";
import edit from "../../images/lk/edit.svg";
import editHovered from "../../images/lk/editHovered.svg";

export default function Card({
  type,
  conditions,
  startBonuses,
  accrualBonuses,
  combustionBonuses,
  writeOfBonuses,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <div className={styles.main__text}>
          <p className={styles.main__point}>Тип карты</p>
          <p className={styles.main__type}>{type}</p>
        </div>
        <div className={styles.main__buttons}>
          <img
            className={
              isHovered ? styles.main__edit_hovered : styles.main__edit
            }
            src={isHovered ? editHovered : edit}
            alt="редактировать карту"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img
            className={styles.main__delete}
            src={deleteImg}
            alt="удалить карту"
          />
        </div>
      </div>
      <div className={styles.parameters}>
        <ul className={styles.parameters__content}>
          <li className={styles.parameters__point}>
            Условия выдачи карты
            <p className={styles.parameters__value}>{conditions}</p>
          </li>
          <li className={styles.parameters__point}>
            Стартовые бонусы
            <p className={styles.parameters__value}>{startBonuses}</p>
          </li>
          <li className={styles.parameters__point}>
            Начисление бонусов
            <p className={styles.parameters__value}>{accrualBonuses}</p>
          </li>
          <li className={styles.parameters__point}>
            Сгорание бонусов
            <p className={styles.parameters__value}>{combustionBonuses}</p>
          </li>
          <li className={styles.parameters__point}>
            Списание бонусов
            <p className={styles.parameters__value}>{writeOfBonuses}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
