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
  // данные пользователя
  const [clients, setClients] = useState([]);
  const [cards, setCards] = useState([]);
  const [about, setAbout] = useState([]);
  // управление попапами
  const [popupAddClientActive, setPopupAddClientActive] = useState(false);
  const [popupEditClientActive, setPopupEditClientActive] = useState(false);
  const [popupEditAccountActive, setPopupEditAccountActive] = useState(false);

  // данные формы редактирования аккаунта
  const [check, setCheck] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [id, setId] = useState("");
  //
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
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
    api
      .getMe()
      .then((user) => {
        api.getUserAbout(user.username).then((res) => {
          setAbout(res);
        });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
    // api.getTable().then((res) => {
    //   console.log(res.table);
    // });
  }, []);
  const closePopup = () => {
    setPopupAddClientActive(false);
    setPopupEditClientActive(false);
    setPopupEditAccountActive(false);
  };
  const openPopupAddClient = () => {
    setPopupAddClientActive(true);
  };

  const openPopupEditAccount = () => {
    setPopupEditAccountActive(true);
  }
  const openPopupEditClient = (e) => {
    api.getClientId(e.target.parentNode.id).then((res) => {
      setSurname(res.surname);
      setName(res.name);
      setBirthday(res.birthday);
      setMail(res.mail);
      setNote(res.note || "");
      setPhone(res.phone_number);
      setCheck(0);
      setId(e.target.parentNode.id);
      setPopupEditClientActive(true);
    });
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
          check={check}
          setCheck={setCheck}
          surname={surname}
          setSurname={setSurname}
          name={name}
          setName={setName}
          birthday={birthday}
          setBirthday={setBirthday}
          mail={mail}
          setMail={setMail}
          phone={phone}
          setPhone={setPhone}
          note={note}
          setNote={setNote}
          id={id}
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
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/cards"
          element={<Cards data={cards} isLoading={isLoading} />}
        />
        <Route
          path="/account"
          element={
            <Account about={about} cards={cards} isLoading={isLoading} openPopupEditAccount={openPopupEditAccount} closePopup={closePopup} popupEditAccountActive={popupEditAccountActive}/>
          }
        />
        <Route path="/mailing" element={<Mailing />} />
      </Routes>
    </div>
  );
}

export default LKContainer;
