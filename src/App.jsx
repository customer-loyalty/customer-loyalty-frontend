import React from "react";
import { Routes, Route } from "react-router-dom";
import LKContainer from "./components/LKCointainer/LKContainer";
import PromoPage from "./components/pages/promo/page";
import Register from "./components/pages/register/page";
// import { api } from "./utils/Api";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<PromoPage />} />
      <Route exact path="/register" element={<Register />} />
      <Route path="/lk/*" element={<LKContainer />} />
    </Routes>
  );
}

export default App;
