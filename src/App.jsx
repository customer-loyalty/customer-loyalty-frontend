import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LKContainer from "./components/LKCointainer/LKContainer";
import PromoPage from "./components/pages/promo/page";
import Register from "./components/pages/register/page";

function App() {
  const [popupAddClientActive, setPopupAddClientActive] = useState(false);
  const closePopup = () => {
    setPopupAddClientActive(false);
  };
  const openPopupAddClient = () => {
      setPopupAddClientActive(true);
  }
  return (
    <Routes>
      <Route exact path="/" element={<PromoPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route
        path="/lk/*"
        element={
          <LKContainer
            popupAddClientActive={popupAddClientActive}
            setPopupAddClientActive={setPopupAddClientActive}
            closePopup={closePopup}
            openPopupAddClient={openPopupAddClient}
          />
        }
      />
    </Routes>
  );
}

export default App;
