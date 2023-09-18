import React from "react";
import { Link } from "react-router-dom";
import mainImage from '../../../images/promoPage/promoImage.png'

function MainPromo() {
  return (
    <div className="flex justify-between pb-[35px] bg-[#F6F7F8] px-[115px] pt-[135px]">
      <div className="flex flex-col max-w-[670px] mt-[65px]">
        <h1 className="text-[56px] font-semibold leading-[78px] mb-6">
          Инструменты для любой программы лояльности под ваш бизнес
        </h1>
        <p className="text-2xl font-semibold leading-[36px] mb-[76px]">
        Эффективные методы <br/> для привлечения и удержания клиентов
        </p>
        <Link to='/register' className="text-2xl text-[#F6F7F8] font-semibold leading-[36px] flex justify-center items-center w-[670px] h-[80px] rounded-[10px] bg-[#5CA1EA]">
          Попробовать 30 дней бесплатно
        </Link>
      </div>
      <img className="" src={mainImage} alt="человек за столом с ноутбуком разговаривает по телефону" />
    </div>
  )
}

export default MainPromo;