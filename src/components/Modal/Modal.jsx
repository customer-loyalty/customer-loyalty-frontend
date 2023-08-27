import React from "react";
import ModalOverlay from "./ModalOverlay";
import styles from "./Modal.module.scss";
import cross from "../../images/button_close-modal.svg";

function Modal({ modalAddClientActive, children, closeModal }) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <ModalOverlay
      modalAddClientActive={modalAddClientActive}
      closeModal={closeModal}
    >
      <section className={styles.modal}>
        <img
          src={cross}
          alt="Кнопка закрытия окна"
          className={styles.closeIcon}
        />
        {children}
      </section>
    </ModalOverlay>
  );
}

export default Modal;
