import React from "react";
import computer from '../../../images/promoPage/computer.svg';
import finger from '../../../images/promoPage/finger.svg';
import dia from '../../../images/promoPage/analythics.svg';
import card from '../../../images/promoPage/card.svg';
import phone from '../../../images/promoPage/phone.svg';

function Tools() {
  
  const data = [
    {
      image: computer,
      title: 'Гибкая настройка программы лояльности',
      description: 'Настраивайте количество, частотность и регулярность отправки и списания бонусов',
    },
    {
      image: finger,
      title: 'Реферальная программа',
      description: 'Поощряйте покупателей бонусными баллами за рекомендации друзьям',
    },
    {
      image: dia,
      title: 'Аналитика по api',
      description: 'Контролируйте эффективность выбранной бонусной стратегии',
    },
    {
      image: card,
      title: 'Номер телефона — ваша бонусная карта',
      description: 'Сделайте точку входа клиента в программу максимально простой и удобной',
    },
    {
      image: phone,
      title: 'Email уведомления',
      description: 'Настройте автоматическое уведомление клиентов о состоянии их статуса лояльности',
    }
  ]

  return (
    <div className=" bg-[#F6F7F8] px-[115px] pt-[109px] pb-[144px]" id="tools">
      <h2 className="text-[56px] font-semibold leading-[78px] text-black mb-[135px]">
        Что мы предлагаем
      </h2>
      <div className="flex flex-wrap gap-x-[197px] gap-y-[80px]">
        {data.map((item) => (
            <div className="flex flex-col justify-between max-w-[426px]" key={item.title}>
              <img src={item.image} alt="картинка" className="w-[130px] h-[125px] mb-10"/>
              <div className="flex flex-col justify-between h-[126px]">
                <h3 className="text-2xl font-semibold leading-6 text-black">{item.title}</h3>
                <p className="text-[18px] font-medium leading-normal text-black">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Tools;