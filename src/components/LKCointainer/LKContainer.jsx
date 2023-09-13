/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu/Menu";
import Cards from "../Cards/Cards";
import Clients from "../Clients/Clients";
import Modal from "../Modal/Modal";
import AddClient from "../AddClient/AddClient";

function LKContainer({
  modalAddClientActive,
  setModalAddClientActive,
  closeModal,
}) {
  return (
    <div className={styles.container}>
      <Modal
        modalAddClientActive={modalAddClientActive}
        closeModal={closeModal}
      >
        <AddClient />
      </Modal>
      <Menu />
      <Routes>
        <Route
          path="/clients"
          element={<Clients setActive={setModalAddClientActive} />}
        />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default LKContainer;
