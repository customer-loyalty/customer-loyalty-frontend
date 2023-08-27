import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

function ModalOverlay({ modalAddClientActive, children, closeModal }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  const isOpen = modalAddClientActive;
  console.log(modalAddClientActive);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, [isOpen]);

  return (
    <div
      className={
        modalAddClientActive ? styles.modalOverlay_active : styles.modalOverlay
      }
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      {children}
    </div>
  );
}

export default ModalOverlay;
