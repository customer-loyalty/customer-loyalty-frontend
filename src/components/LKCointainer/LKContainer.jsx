import React from "react";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu";
import Main from "../Main/Main";

function LKContainer() {
  return (
    <div className={styles.container}>
      <Menu />
      <Main />
    </div>
  );
}

export default LKContainer;
