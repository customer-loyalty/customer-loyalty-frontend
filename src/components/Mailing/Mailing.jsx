import React from "react";
import styles from "./Mailing.module.css";
import Headline from "../Headline/Headline";
import MailingCard from "../MailingCard/MailingCard";

export default function Mailing() {
  return (
    <main className={styles.content}>
      <Headline title="Рассылки" />
      <div className={styles.cards}>
        <MailingCard
          title="Уведомление клиента об успешной регистрации"
          message="*Имя*, здравствуйте! Спасибо за регистрацию! Вам начислено *хххх* бонусов. Текущий баланс *хххх* бонусов. "
        />
        <MailingCard
          title="Уведомление клиента об успешной регистрации"
          message="*Имя*, здравствуйте! Спасибо за регистрацию! Вам начислено *хххх* бонусов. Текущий баланс *хххх* бонусов. "
        />
      </div>
    </main>
  );
}
