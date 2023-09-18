import React from "react";

function Tariffs() {
    const data = [
        {
            title: "Пробный",
            price: "0 ₽",
            days: "30 дней",
            advantages: [
                "генерация qr-кодов для доступа клиента в программу",
                "аналитика по API",
                "автоматическая рассылка email уведомлений клиентам",
            ],
            button: "Попробовать бесплатно",
        },
        {
            title: "Приветственный",
            price: "5 000 ₽",
            days: "мес",
            advantages: [
                "генерация qr-кодов для доступа клиента в программу",
                "автоматическая рассылка email уведомлений клиентам",
            ],
            button: "Подключение тарифа доступно после пробного периода",
        },
        {
            title: "Дополненный",
            price: "10 000 ₽",
            days: "мес",
            advantages: [
                "генерация qr-кодов для доступа клиента в программу",
                "аналитика по API",
                "автоматическая рассылка email уведомлений клиентам",
            ],
            button: "Подключение тарифа доступно после пробного периода",
        },
    ];

    return (
        <div
            className=" bg-black px-[115px] pt-[135px] pb-[133px]"
            id="tariffs"
        >
            <h2 className="text-[56px] font-semibold leading-[78px] text-[#F6F7F8] mb-[82px]">
                30 дней бесплатно, затем тариф на выбор
            </h2>
            <div className="flex gap-10 justify-end">
                {data.map((item) => (
                    <div
                        className="flex flex-col w-[408px] h-[600px] bg-[#F6F7F8] rounded-[10px] items-center px-[37px]"
                        key={item.title}
                    >
                        <h3 className="text-4xl font-bold mt-[88px] mb-4">
                            {item.title}
                        </h3>
                        <p
                            className={`text-lg font-medium flex items-center ${
                                item.advantages.length > 2
                                    ? "mb-10"
                                    : "mb-[77px]"
                            }`}
                        >
                            <span className="text-2xl font-semibold leading-9">
                                {item.price}
                            </span>
                            /{item.days}
                        </p>
                        <ul
                            className={`list-disc list-inside flex flex-col gap-6 ${
                                item.advantages.length > 2
                                    ? "mb-10"
                                    : "mb-[55px]"
                            }`}
                        >
                            {item.advantages.map((adv) => (
                                <li key={adv} className="text-lg font-medium">
                                    {adv}
                                </li>
                            ))}
                        </ul>
                        {item.title === "Пробный" ? (
                            <button
                                type="button"
                                className="w-full h-[60px] rounded-[10px] bg-[#5CA1EA] text-base font-medium leading-[22px] text-[#F6F7F8] disabled:text-black"
                            >
                                {item.button}
                            </button>
                        ) : (
                            <button
                                type="button"
                                disabled
                                className="w-full h-[60px] rounded-[10px] bg-[#A2A2A2] text-base font-medium leading-[22px] text-[#323131] disabled:text-black"
                            >
                                {item.button}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tariffs;
