import React from "react";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu/Menu";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import AddClient from "../AddClient/AddClient";

function LKContainer({
  modalAddClientActive,
  setModalAddClientActive,
  closeModal,
}) {
  /* eslint-disable */
  /* eslint react/prop-types: 0 */
  return (
    <div className={styles.container}>
      <Modal
        modalAddClientActive={modalAddClientActive}
        closeModal={closeModal}
      >
        <AddClient />
      </Modal>
      <Menu />
      <Main setActive={setModalAddClientActive} />
    </div>
  );
}

export default LKContainer;
