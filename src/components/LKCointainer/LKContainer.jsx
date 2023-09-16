/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu/Menu";
import Cards from "../Cards/Cards";
import Clients from "../Clients/Clients";
import Account from "../Account/Account";
import Mailing from "../Mailing/Mailing";
import Popup from "../Popup/Popup";
import AddClient from "../AddClient/AddClient";

function LKContainer({openPopupAddClient, popupAddClientActive,closePopup}){
  return (
    <div className={styles.container}>
        <Popup popupAddClientActive={popupAddClientActive} closePopup={closePopup}>
            <AddClient
                closePopup={closePopup}
                popupAddClientActive={popupAddClientActive}/>
        </Popup>
      <Menu />
      <Routes>
        <Route
          path="/clients"
          element={<Clients openPopupAddClient={openPopupAddClient} />}
        />
        <Route path="/cards" element={<Cards />} />
        <Route path="/account" element={<Account />} />
        <Route path="/mailing" element={<Mailing />} />
      </Routes>
    </div>
  );
}

export default LKContainer;
