import React from "react";
import styles from "./Cards.module.css";
import Headline from "../Headline/Headline";
import ButtonLK from "../ButtonLK/Button";
import shape from "../../images/lk/shape.svg";
import Card from "../Card/Card";
import cards from "../../utils/cards.json";

export default function Cards() {
  const res = cards.cards.map((item) => (
    <Card
      key={item.id}
      type="Пользовательская"
      conditions={item.conditions}
      startBonuses={item.startBonuses}
      accrualBonuses={item.accrualBonuses}
      combustionBonuses={item.combustionBonuses}
      writeOfBonuses={item.bonus_usage}
    />
  ));
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
      <div className={styles.cards}>{res}</div>
    </main>
  );
}
