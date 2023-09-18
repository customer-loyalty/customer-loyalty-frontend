import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import mock from '../../../images/register/mock.png'

function MainContent() {

  const [accept, setAccept] = useState(false);

  const onAcceptChange = () => {
    setAccept(!accept)
  }

  const [organization, setOrganization] = useInput('');
  const [name, setName] = useInput('');
  const [phone, setPhone] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirmPassword, setConfirmPassword] = useInput('');

  const data = [
    {
      id: 1,
      title: 'Название вашей организации',
      onChange: (e) => {
        setOrganization(e);
      },
      value: organization,
      placeholder: "ИП «Кофеман»",
      type: "text",
    },
    {
      id: 2,
      title: 'Ваше имя и фамилия',
      onChange: (e) => {
        setName(e);
      },
      value: name,
      placeholder: "Сергей Иванов",
      type: "text",
    },
    {
      id: 3,
      title: 'Телефон',
      onChange: (e) => {
        setPhone(e);
      },
      value: phone,
      placeholder: "+7",
      type: "text",
    },
    {
      id: 4,
      title: 'Email',
      onChange: (e) => {
        setEmail(e);
      },
      value: email,
      placeholder: "sergeyivanov@yandex.ru",
      type: "email",
    },
    {
      id: 5,
      title: 'Придумайте пароль',
      onChange: (e) => {
        setPassword(e);
      },
      value: password,
      placeholder: "*************",
      type: "password",
    },
    {
      id: 6,
      title: 'Повторите пароль',
      onChange: (e) => {
        setConfirmPassword(e);
      },
      value: confirmPassword,
      placeholder: "*************",
      type: "password",
    }
  ]

  const handleSubmit = () => {
    alert('!!!')
  }

  return ( 
    <div className="max-w-[1920px] mx-auto pl-[200px]">
      <div className="mt-[54px] max-w-[692px]">
        <h1 className="text-4xl font-bold text-[#F6F7F8] mb-10">Попробовать 30-дневный пробный период</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 max-w-[580px] pb-[122px]">
          {data.map(item => (
            <div key={item.id}>
              <p className="text-[14px] font-normal leading-[21px] text-[#F6F7F8] mb-1">{item.title}</p>
              <input className="hover:bg-[#5CA1EA] focus:bg-[#5CA1EA] focus:placeholder:text-[#F6F7F8] ease-in duration-100 bg-[#323131] placeholder:text-[#747171] w-[580px] h-[45px] text-[#F6F7F8] rounded-lg pl-3" type={item.type} placeholder={item.placeholder} onChange={item.onChange} value={item.value} required />
            </div>
          ))}
          <div className="flex gap-4 items-center mt-[124px] mb-5">
            <input className="bg-[#1e1c1c] w-6 h-6" id="acceptCheck" required type="checkbox" onChange={onAcceptChange} />
            <p className="text-[#F6F7F8] text-[12px] font-normal">нажимая «Зарегистрироваться» вы соглашаетесь с договором оферты и политикой конфиденциальности</p>
          </div>
          <button type="submit"  className="text-lg font-medium text-[#F6F7F8] w-full h-[60px] flex items-center justify-center bg-[#5CA1EA] rounded-[10px]">Зарегистрироваться</button>
        </form>
      </div>
      <img src={mock} alt="пример личного кабинета" className="absolute right-0 top-0" />
    </div>
   );
}
 
export default MainContent;