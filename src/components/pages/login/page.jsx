import React from "react";
import HeaderDesktop from "../register/HeaderDesktop";
import MainContent from "./MainContent";

function Login() {
  return (
    <div className="w-full mx-auto bg-[#1e1c1c] min-h-[100vh]">
      <HeaderDesktop />
      <MainContent />
    </div>
  );
}

export default Login;
