import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/useInput";

function MainContent() {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const data = [
    {
      id: 1,
      title: "Email",
      onChange: (e) => {
        setEmail(e);
      },
      value: email,
      placeholder: "sergeyivanov@yandex.ru",
      type: "email",
    },
    {
      id: 2,
      title: "Пароль",
      onChange: (e) => {
        setPassword(e);
      },
      value: password,
      placeholder: "*************",
      type: "password",
    },
  ];

  const handleSubmit = () => {
    alert("!!!");
  };

  return (
    <div className="pt-[160px] max-w-[1920px] mx-auto flex justify-center">
      <div className="max-w-[692px]">
        <h1 className="font-bold text-6xl font-500 text-[#F6F7F8] mb-40 text-center">
          Вход в аккаунт
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 max-w-[580px] pb-20"
        >
          {data.map((item) => (
            <div className="mb-8" key={item.id}>
              <p className="text-[14px] font-normal leading-[21px] text-[#F6F7F8] mb-1">
                {item.title}
              </p>
              <input
                className="hover:bg-[#5CA1EA] focus:bg-[#5CA1EA] focus:placeholder:text-[#F6F7F8] ease-in duration-100 bg-[#323131] placeholder:text-[#747171] w-[580px] h-[45px] text-[#F6F7F8] rounded-lg pl-3"
                type={item.type}
                placeholder={item.placeholder}
                onChange={item.onChange}
                value={item.value}
                required
              />
            </div>
          ))}
          <Link to="/lk/clients">
            <button
              type="submit"
              className="text-lg font-medium text-[#F6F7F8] w-full h-[60px] flex items-center justify-center bg-[#5CA1EA] rounded-[10px] mt-[137px]"
            >
              Войти
            </button>
          </Link>
        </form>
        <Link
          to="/register"
          className="text-[14px] font-normal leading-[21px] text-[#F6F7F8] justify-center flex cursor-pointer"
        >
          нет аккаунта? зарегистрироваться
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
