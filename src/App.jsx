import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LKContainer from "./components/LKCointainer/LKContainer";
import PromoPage from "./components/pages/promo/page";
import Register from "./components/pages/register/page";
import { api } from "./utils/Api";

function App() {
  const [popupAddClientActive, setPopupAddClientActive] = useState(false);
  const [popupEditClientActive, setPopupEditClientActive] = useState(false);
  const closePopup = () => {
    setPopupAddClientActive(false);
    setPopupEditClientActive(false);
  };
  const openPopupAddClient = () => {
    setPopupAddClientActive(true);
  };
  const openPopupEditClient = (e) => {
    api.getClientId(e.target.parentNode.id).then((res) => {
      setPopupEditClientActive(true);
      console.log(res);
    });
  };

  return (
    <Routes>
      <Route exact path="/" element={<PromoPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route
        path="/lk/*"
        element={
          <LKContainer
            popupAddClientActive={popupAddClientActive}
            closePopup={closePopup}
            openPopupAddClient={openPopupAddClient}
            popupEditClientActive={popupEditClientActive}
            openPopupEditClient={openPopupEditClient}
          />
        }
      />
    </Routes>
  );
}

export default App;
