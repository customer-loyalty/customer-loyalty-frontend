import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LKContainer from "./components/LKCointainer/LKContainer";
import PromoPage from "./components/pages/promo/page";

function App() {
  const [modalAddClientActive, setModalAddClientActive] = useState(false);
  const closeModal = () => {
    setModalAddClientActive(false);
  };
  return (
    <Routes>
      <Route exact path="/" element={<PromoPage />} />
      <Route
        path="/lk/*"
        element={
          <LKContainer
            modalAddClientActive={modalAddClientActive}
            setModalAddClientActive={setModalAddClientActive}
            closeModal={closeModal}
          />
        }
      />
    </Routes>
  );
}

export default App;
