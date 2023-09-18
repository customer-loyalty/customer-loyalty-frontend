import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import MainContent from "./Main";
import FooterDesktop from "./FooterDesktop";

function PromoPage() {
  return (
    <div className="w-full mx-auto bg-[#F6F7F8]">
      <HeaderDesktop />
      <MainContent />
      <FooterDesktop />
    </div> 

   );
}
 
export default PromoPage;