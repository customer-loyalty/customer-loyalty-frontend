import React from "react";
import { Menu, Button } from "@mantine/core";
import logo from '../../../images/promoPage/Google Wallet.svg'
import burger from '../../../images/promoPage/icon_burger.svg'
import close from '../../../images/promoPage/icon_burger_close.svg'

function HeaderMobile() {

  const [isOpen, setIsOpen] = React.useState(false)

  return ( 
    <header className="mx-auto lg:hidden bg-[#F0EFF2]">
      <div className="flex h-[52px] justify-center items-center relative">
        <div className="absolute flex items-center justify-center gap-1 top-3 left-4">
          <img src={logo} alt="логотип" />
          <h2 className="text-xs font-normal leading-[14px] text-[#9436A4] max-w-[60px]">Активный Капитал</h2>
        </div>
        <Menu styles={{
          dropdown: {
            marginTop: '0 !important',
            width: '375px !important',
          },
          item: {
            margin: '0 !important',
          }
        }} className="flex justify-center items-center" opened={isOpen} onChange={setIsOpen}>
        <Menu.Target className="my-auto">
          <Button className="p-0"><img src={burger} alt="кнопка меню"/></Button>
        </Menu.Target>

        <Menu.Dropdown onClick={() => {}} className="mt-1 border-none bg-[#F0EFF2] rounded-none px-4 pt-5 pb-1">
          <Menu.Item className="p-5">
            <button className="text-base font-normal leading-6 text-[#1E1D1D]" type="button">Возможности</button>
          </Menu.Item>
          <Menu.Item className="p-5">
            <button className="text-base font-normal leading-6 text-[#1E1D1D]" type="button">Как это работает</button>
          </Menu.Item>
          <Menu.Item className="p-5">
            <button className="text-base font-normal leading-6 text-[#1E1D1D]" type="button">Тарифы</button>
          </Menu.Item>
          <Menu.Item className="p-5">
            <button className="text-base font-normal leading-6 text-[#1E1D1D]" type="button">Личный кабинет</button>
          </Menu.Item>
          <Menu.Item className="p-5">
            <p className="text-base font-normal leading-[24px]">Нужна помощь? Звоните</p>
            <button type="button" className="text-2xl font-normal leading-[34px]">8(499)123-12-12</button>
          </Menu.Item>
          <Menu.Item className="p-0">
            <Button className="flex mx-auto"><img src={close} alt="крестик закрытия" className="self-center"/></Button>
          </Menu.Item>
        </Menu.Dropdown>
        </Menu>
        <div className="">
          <p> </p>
        </div>
      </div>
    </header>
   );
}
 
export default HeaderMobile;