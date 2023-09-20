import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./LKContainer.module.scss";
import Menu from "../Menu/Menu";
import Cards from "../Cards/Cards";
import Clients from "../Clients/Clients";
import Account from "../Account/Account";
import Mailing from "../Mailing/Mailing";
import Popup from "../Popup/Popup";
import AddClient from "../AddClient/AddClient";
import { api } from "../../utils/Api";
import EditClient from "../EditClient/EditClient";

function LKContainer() {
  const [clients, setClients] = useState([]);
  const [editClient] = useState({});
  // const [editClient, setEditClient] = useState({});
  const [cards, setCards] = useState([]);
  const [popupAddClientActive, setPopupAddClientActive] = useState(false);
  const [popupEditClientActive, setPopupEditClientActive] = useState(false);

  useEffect(() => {
    api.authUser().then((res) => {
      localStorage.setItem("token", res.access);
    });
  }, []);
  // Получение данных всех разделов
  useEffect(() => {
    api
      .getClients()
      .then((res) => {
        // console.log(res);
        setClients(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    api
      .getCards()
      .then((res) => {
        // console.log(res);
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    // api
    //   .getUsers()
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка: ${err}`);
    //   });
    // api
    //   .getMe()
    //   .then((user) => {
    //     api.getUserAbout(user.username).then((res) => {
    //       console.log(res);
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка: ${err}`);
    //   });
    // api.getTable().then((res) => {
    //   console.log(res.table);
    // });
  }, []);
  const closePopup = () => {
    setPopupAddClientActive(false);
    setPopupEditClientActive(false);
  };
  const openPopupAddClient = () => {
    setPopupAddClientActive(true);
  };
  const openPopupEditClient = () => {
    // api.getClientId(e.target.parentNode.id).then((res) => {
    //   setEditClient(res);
    //   setPopupEditClientActive(true);
    // });
    setPopupEditClientActive(true);
  };
  return (
    <div className={styles.container}>
      <Popup popupActive={popupAddClientActive} closePopup={closePopup}>
        <AddClient
          closePopup={closePopup}
          popupAddClientActive={popupAddClientActive}
        />
      </Popup>
      <Popup popupActive={popupEditClientActive} closePopup={closePopup}>
        <EditClient
          closePopup={closePopup}
          popupEditClientActive={popupEditClientActive}
          initData={editClient}
        />
      </Popup>
      <Menu />
      <Routes>
        <Route
          path="/clients"
          element={
            <Clients
              openPopupAddClient={openPopupAddClient}
              openPopupEditClient={openPopupEditClient}
              data={clients}
            />
          }
        />
        <Route path="/cards" element={<Cards data={cards} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/mailing" element={<Mailing />} />
      </Routes>
    </div>
  );
}

export default LKContainer;
