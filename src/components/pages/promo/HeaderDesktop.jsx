import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/promoPage/logoDesktop.svg";

function HeaderDesktop() {
  return (
    <header className="flex items-center justify-between bg-[#F6F7F8] px-[115px] max-w-[1920px] mx-auto  py-5 h-[100px]">
      <div className="flex gap-[31px]">
        <div className="flex gap-6">
          <img src={logo} alt="логотип" />
          <p className="text-4xl font-bold text-black flex items-center">
            LOGO
          </p>
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-12">
            <li>
              <a href="#tools" className="text-[20px] font-medium text-black">
                Инструменты
              </a>
            </li>
            <li>
              <a href="#tariffs" className="text-[20px] font-medium text-black">
                Тарифы
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="text-[20px] font-medium text-black"
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex lg:gap-[60px] xl:gap-[120px]">
        <Link to="/login" className="text-[20px] font-medium text-black">
          Личный кабинет
        </Link>
      </div>
    </header>
  );
}

export default HeaderDesktop;
