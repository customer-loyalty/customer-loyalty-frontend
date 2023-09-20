import React from "react";
import styles from "./Popup.module.scss";

export default function Popup({ popupActive, closePopup, children }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  const a = popupActive;
  const form = document.getElementById("formAddClient");
  const handleCloseClick = () => {
    closePopup();
    // form.reset();
  };
  const handleClosePopup = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseClick();
    }
  };
  return (
    <div
      className={
        popupActive ? styles.popupOverlay_active : styles.popupOverlay
      }
      onClick={handleClosePopup}
    >
      <section className={styles.popup}>{children}</section>
    </div>
  );
}
