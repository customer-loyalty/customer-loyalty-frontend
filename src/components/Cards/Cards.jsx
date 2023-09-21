/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Cards.module.css";
import Headline from "../Headline/Headline";
import ButtonLK from "../ButtonLK/Button";
import shape from "../../images/lk/shape.svg";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

export default function Cards({ data, isLoading }) {
  const res = data.map((item) => (
    <Card
      type={item.name}
      conditions={item.purchase_amount || "При регистрации"}
      startBonuses={item.initial_bonuses || 0}
      accrualBonuses={item.rate_field || 0}
      combustionBonuses="Не сгорают"
      writeOfBonuses="10% от суммы покупок"
      key={item.id}
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
      {isLoading ? <Loader /> : <div className={styles.cards}>{res}</div>}
    </main>
  );
}
