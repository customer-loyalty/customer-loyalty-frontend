import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import Main from "./Main";

function PromoPage() {
  return (
    <div className="bg-gradient-to-b w-full from-[#B6C4CE] to-[#E7E7E7] to-99.44%">
      <HeaderDesktop />
      <HeaderMobile />
      <Main />
    </div> 

   );
}
 
export default PromoPage;