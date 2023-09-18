import React from "react";
import styles from "./Popup.module.scss";

export default function Popup({ popupAddClientActive, closePopup, children }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  const a = popupAddClientActive;
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
        popupAddClientActive ? styles.popupOverlay_active : styles.popupOverlay
      }
      onClick={handleClosePopup}
    >
      <section className={styles.popup}>{children}</section>
    </div>
  );
}
