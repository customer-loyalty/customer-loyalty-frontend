import React from "react";
import styles from "./Cards.module.css";
import Headline from "../Headline/Headline";
import ButtonLK from "../ButtonLK/Button";
import shape from "../../images/lk/shape.svg";
import Card from "../Card/Card";

export default function Cards() {
  return (
    <main className={styles.content}>
      <Headline title="Карты" />
      <div className={styles.buttons}>
        <ButtonLK
          img={shape}
          style={{ backgroundColor: "#5CA1EA", color: "#FFFFFF" }}
          hoverStyle={{ backgroundColor: "#384098", color: "#FFFFFF" }}
          text="Создать карту"
        />
      </div>
      <div className={styles.cards}>
        <Card
          type="Стандартная"
          conditions="При регистрации"
          startBonuses="100"
          accrualBonuses="5% от покупки"
          combustionBonuses="Не сгорают"
          writeOfBonuses="10% от суммы покупок"
        />
        <Card
          type="Стандартная"
          conditions="При регистрации"
          startBonuses="100"
          accrualBonuses="5% от покупки"
          combustionBonuses="Не сгорают"
          writeOfBonuses="10% от суммы покупок"
        />
        <Card
          type="Стандартная"
          conditions="При регистрации"
          startBonuses="100"
          accrualBonuses="5% от покупки"
          combustionBonuses="Не сгорают"
          writeOfBonuses="10% от суммы покупок"
        />
        <Card
          type="Стандартная"
          conditions="При регистрации"
          startBonuses="100"
          accrualBonuses="5% от покупки"
          combustionBonuses="Не сгорают"
          writeOfBonuses="10% от суммы покупок"
        />
      </div>
    </main>
  );
}
