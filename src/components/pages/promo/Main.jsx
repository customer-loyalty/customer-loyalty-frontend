import React from "react";
import MainPromo from "./MainPromo";
import Tools from "./Tools";
import Tariffs from "./Tariffs";
import Reviews from "./Reviews";
import Contacts from "./Contacts";


function MainContent() {
  return ( 
    <div className="max-w-[1920px] mx-auto">
      <MainPromo />
      <Tools />
      <Tariffs />
      <Reviews />
      <Contacts />
    </div>
   );
}
 
export default MainContent;