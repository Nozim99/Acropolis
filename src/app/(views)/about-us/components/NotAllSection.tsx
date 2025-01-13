import Image from "next/image";

const NotAllSection = () => {
    const cardList = [
        {
            title: "Надежное партнерство",
            image: "/assets/card-handshake.png",
            width: 370,
            height: 193,
            description: "Стремление стать надежным партнером означает, что мы ориентированы на долгосрочное сотрудничество, понимаем потребности заказчиков и готовы поддерживать их на каждом этапе развития",
        },
        {
            title: "Поддержка бизнес-целей заказчиков",
            image: "/assets/card-chart.png",
            width: 139,
            height: 100,
            description: "Наш фокус на достижении бизнес-целей клиентов обеспечивает индивидуальный подход и решения, которые непосредственно способствуют успеху их бизнеса.",
        },
        {
            title: "Комплексный подход к ИТ и ИБ",
            image: "/assets/card-it.png",
            width: 218,
            height: 263,
            description: "Объединяя экспертизу в области информационных технологий и информационной безопасности, мы предлагаем комплексные решения, которые не только улучшают эффективность.",
        },
        {
            title: "Развитие цифровой экосистемы региона",
            image: "/assets/card-hand-plant.png",
            width: 212,
            height: 213,
            description: "Участвуя в развитии цифровой инфраструктуры Узбекистана, мы способствуем созданию благоприятных условий для роста бизнеса наших заказчиков в регионе.",
        },
    ]

    return (
        <section>
            <div className={"mContainer pt-[23px] pb-[20px] text-[#D8A227] sm:pb-[25px] md:pb-[30px] lg:pb-[44px]"}>
                {/*<h2 className={"title mb-[32px] text-center"}>*/}
                <h2 className={"title mb-[20px] text-center sm:mb-[23px] md:mb-[28px] lg:mb-[32px]"}>
                    ЭТО ЕЩЕ НЕ ВСЁ
                </h2>
                <p className={"text-sm mb-[30px] text-white sm:text-base md:text-lg lg:font-light lg:text-xl xl:text-2xl sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]"}>Мы
                    ценим настоящие партнерские отношения, глубоко вникаем
                    в
                    бизнес-цели наших заказчиков, чтобы эффективно поддержать их достижения. Применяя комплексный подход
                    к ИТ и
                    информационной безопасности, мы создаём решения, которые объединяют инновации с надёжностью. Вместе
                    мы
                    ускоряем развитие цифровой экосистемы региона, превращая технологические возможности в реальное
                    преимущество
                    для бизнеса.</p>
                {/*<ul className={"grid grid-cols-2 gap-[24px] font-medium text-4xl text-white"}>*/}
                <ul className={"grid grid-cols-1 gap-y-[24px] font-medium text-lg text-white sm:grid-cols-2 md:text-2xl lg:gap-y-[32px] lg:text-3xl xl:text-4xl"}>
                    {cardList.map((item, index) => (
                        <li className={`
                    ${index % 2 === 0 ? "bg-[#D8A227]" : "bg-[#979797]"} 
                    ${index === 2 ? "order-1" : ""}
                    ${(index === 0 || index === 3) ? "place-self-end" : ""}
                    card border relative p-[16px] w-[270px] h-[140px] flex items-end overflow-hidden mx-auto md:w-[336px] md:h-[190px] lg:w-[450px] lg:h-[225px] xl:w-[590px] xl:h-[267px]`}
                            // card border relative p-[16px] w-[590px] h-[267px] flex items-end overflow-hidden`}
                            key={item.title}>
                            {index === 2
                                ? <div
                                    className={"img bg-[#004040] rounded-full absolute top-[18px] right-[18px] w-[150px] h-[150px]"}>
                                    <Image className={`absolute top-[14px] right-[8px]`} src={item.image}
                                           alt={item.title} width={item.width} height={item.height}/></div>
                                : <Image className={`img absolute top-0 right-0`} src={item.image} alt={item.title}
                                         width={item.width} height={item.height}/>
                            }
                            <p className={"w-5/6 relative top-0 card_title"}>{item.title}</p>
                            <p className={"text-2xl card_description absolute top-[50px] left-[50px] opacity-0 scale-[0.3] w-full h-full"}>
                                {item.description}
                            </p>
                        </li>
                    ))}</ul>
            </div>
        </section>
    )
}

export default NotAllSection