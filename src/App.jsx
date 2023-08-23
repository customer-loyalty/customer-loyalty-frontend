import React from "react";
import { Routes, Route } from "react-router-dom";
import LKContainer from "./components/LKCointainer/LKContainer";
import PromoPage from "./components/pages/promo/page";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PromoPage />} />
        <Route path="/admin" element={<LKContainer />} />
      </Routes>
    </div>
  );
}

export default App;
