import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../images/promoPage/logoDesktop.svg'

function HeaderDesktop() {

  const navigate = useNavigate();

  const handleTools = () => {
    navigate('/#tools')
  }

  return ( 
    <header className="flex items-center justify-between bg-[#1e1c1c] px-[115px] max-w-[1920px] mx-auto  py-5 h-[100px]">
      <div className="flex gap-[31px]">
        <div className="flex gap-6">
          <img src={logo} alt="логотип" />
          <p className="text-4xl font-bold text-[#F6F7F8] flex items-center">LOGO</p>
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-12">
            <li>
              <button type="button" onClick={handleTools} className="text-[20px] font-medium text-[#F6F7F8]">Инструменты</button>
            </li>
            <li>
              <a href='/#tariffs' className="text-[20px] font-medium text-[#F6F7F8]">Тарифы</a>
            </li>
            <li>
              <a href='/#contacts' className="text-[20px] font-medium text-[#F6F7F8]">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex lg:gap-[60px] xl:gap-[120px]">
        <Link to='/' className="text-[20px] font-medium text-[#F6F7F8]">Личный кабинет</Link>
      </div>
    </header>
   );
}
 
export default HeaderDesktop;