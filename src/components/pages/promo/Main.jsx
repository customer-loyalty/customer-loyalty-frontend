import React from "react";
import girl1 from '../../../images/promoPage/girl1.svg'
import boy1 from '../../../images/promoPage/boy1.svg'
import girl2 from '../../../images/promoPage/girl2.svg'
import boy2 from '../../../images/promoPage/boy2.svg'

function Main() {
  return ( 
    <main className="bg-gradient-to-b from-[#517FA4] to-[#243949] min-h-[100vh] max-w-[1440px] mx-auto">
      <div className="max-w-[91%] mx-auto flex flex-col items-center justify-center pt-[60px] lg:pt-[186px]">
        <h1 className="text-[26px] text-center leading-[32px] text-white font-medium mb-9 lg:text-[70px] lg:leading-[87px] lg:mb-[68px]">Программа лояльности <br/> для клиентов</h1>
        <button type="button" className="text-base font-normal leading-[18px] text-white mb-9 lg:hidden">8(499) 123-12-12</button>
          <div className="flex lg:gap-[50px] lg:justify-center xl:justify-between lg:w-full lg:px-[52px] lg:order-last">
            <div className="hidden lg:flex gap-[9px] mb-[72px]">
              <img src={girl2} alt="девушка" className="w-[156px] h-[209px] xl:w-[249px] xl:h-[344px]"/>
              <img src={boy2} alt="мужчина" className="w-[156px] h-[209px] xl:w-[249px] xl:h-[344px]"/>
            </div>
            <div className="flex gap-[9px] mb-[72px]">
              <img src={girl1} alt="девушка" className="xl:w-[249px] xl:h-[344px]"/>
              <img src={boy1} alt="мужчина" className="xl:w-[249px] xl:h-[344px]"/>
            </div>
          </div>
        <button type="button" className="rounded-[2px] border border-white text-base leading-[22px] text-white font-medium bg-[#9436A4] py-4 px-[75px] lg:text-[18px] lg:py-5 lg:px-11 lg:mb-[52px]">Попробовать бесплатно</button>
      </div>
    </main>
   );
}
 
export default Main;