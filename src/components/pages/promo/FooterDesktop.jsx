import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/promoPage/logoDesktop.svg'

function FooterDesktop() {
  return ( 
    <footer className="flex items-center justify-between bg-[#1E1E1E] px-[115px] max-w-[1920px] mx-auto  py-[73px]">
      <div className="flex gap-[156px] items-center">
        <div className="flex flex-col gap-[14px] ml-[22px] w-[565px]">
          <div className="flex gap-6 items-center">
            <img className="w-[60px] h-[60px]" src={logo} alt="логотип" />
            <h4 className="text-4xl font-semibold text-[#F6F7F8]">LOGO</h4>
          </div>
          <div className="flex flex-col ml-[84px] gap-2">
            <p className="text-lg font-medium text-[#F6F7F8]">Logo © 2023</p>
            <Link className="text-lg font-medium text-[#F6F7F8]" to='/'>Договор оферты</Link>
            <Link className="text-lg font-medium text-[#F6F7F8]" to='/'>Политика персональных данных</Link>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-[22px]">
            <li><a className="text-[20px] font-medium leading-[36px] text-[#F6F7F8]" href="#tools">Инструменты</a></li>
            <li><a className="text-[20px] font-medium leading-[36px] text-[#F6F7F8]" href="#tariffs">Тарифы</a></li>
            <li><a className="text-[20px] font-medium leading-[36px] text-[#F6F7F8]" href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
      <Link className="text-[#F6F7F8] text-[20px] font-medium leading-[36px] self-start" to='/'>Личный кабинет</Link>
    </footer>
   );
}
 
export default FooterDesktop;