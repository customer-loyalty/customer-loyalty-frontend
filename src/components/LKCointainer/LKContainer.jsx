/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu/Menu";
import Cards from "../Cards/Cards";
import Clients from "../Clients/Clients";
import Account from "../Account/Account";
import Mailing from "../Mailing/Mailing";
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
        <Route path="/account" element={<Account />} />
        <Route path="/mailing" element={<Mailing />} />
      </Routes>
    </div>
  );
}

export default LKContainer;
