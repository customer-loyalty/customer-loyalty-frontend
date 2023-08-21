import React from "react";
import logo from '../../../images/promoPage/logoDesktop.svg'

function HeaderDesktop() {
  return ( 
    <header className="hidden lg:flex items-center justify-between max-w-[1440px] mx-auto bg-[#b7c4ce] py-8 h-[125px]">
      <div className="flex gap-1">
        <img src={logo} alt="логотип" />
        <p className="text-[17px] font-normal leading-[20px] text-[#9436A4] flex items-center">Активный <br/> Капитал</p>
      </div>
      <div className="flex lg:gap-[60px] xl:gap-[120px]">
        <nav className="flex items-center">
          <ul className="flex gap-12">
            <li>
              <button type="button" className="text-[18px] font-normal leading-[25px]">Возможности</button>
            </li>
            <li>
              <button type="button" className="text-[18px] font-normal leading-[25px]">Как это работает</button>
            </li>
            <li>
              <button type="button" className="text-[18px] font-normal leading-[25px]">Тарифы</button>
            </li>
          </ul>
        </nav>
        <button type="button" className="text-[18px] font-normal leading-[25px]">8(499) 123-12-12</button>
        <button type="button" className="border rounded-[2px] border-[#9436A4] py-4 px-[38px] text-[18px] font-medium leading-[25px]">Личный кабинет</button>
      </div>
    </header>
   );
}
 
export default HeaderDesktop;