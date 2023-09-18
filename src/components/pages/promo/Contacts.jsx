import React from "react";
import { Link } from "react-router-dom";
import bubble from '../../../images/promoPage/bubble.png';

function Contacts() {
  return ( 
    <div className="bg-[#1E1E1E] px-[115px] py-[135px]" id="contacts">
      <h2 className="text-[#F6F7F8] text-[56px] font-semibold leading-[78px] mb-[80px]">Остались вопросы?</h2>
      <div className="flex justify-between">
        <div className="bg-[#F6F7F8] rounded-[10px] flex flex-col items-center w-[965px] h-[600px]">
          <h3 className="text-[#1E1E1E] text-4xl font-bold mt-[80px]">Напишите нам</h3>
          <Link className="mt-[50px] text-[#F6F7F8] text-2xl font-semibold leading-[36px] bg-[#5CA1EA] w-[455px] h-[80px] rounded-[10px] flex justify-center items-center" to='mailto:helloloyal@yandex.ru'>helloloyal@yandex.ru</Link>
          <p className="mt-[64px] text-4xl font-bold text-[#1E1E1E]">или позвоните</p>
          <p className="mt-[9px] text-4xl font-bold text-[#1E1E1E]">звонок по РФ бесплатный</p>
          <Link className="mt-[61px] text-2xl font-semibold leading-[36px] text-[#1E1E1E]" to='tel:8(900)254-14-14'>8(900)254-14-14</Link>
        </div>
        <img className="object-contain h-full mt-[116px]" src={bubble} alt="пузырь" />
      </div>
    </div>
   );
}
 
export default Contacts;