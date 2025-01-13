import Image from "next/image";

const ServicesSection = () => {
    const cardList = [
        {
            url: "",
            title: "Консалтинг, аудит ИБ/ИТ (обследование)",
        },
        {
            url: "",
            title: "Проектирование",
        },
        {
            url: "",
            title: "Пусконаладка",
        },
        {
            url: "",
            title: "Сервисная поддержка",
        },
    ]

    return (
        <section className={"pb-[27px] bg-white"}>
            <div className={"container mx-auto relative pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[78px]"}>

                <h2 className={"text-center font-bold lg:text-5xl mb-[35px] text-[var(--darkBlue)] text-3xl sm:text-4xl md:text-5xl"}>УСЛУГИ</h2>
                <ul
                    className={"grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 sm:w-[540px] sm:mx-auto lg:w-full lg:grid-cols-4 xl:flex xl:justify-center xl:gap-x-[50px]"}
                >
                    {cardList.map((item, index) => (
                        <li key={index}
                            className={"relative w-[242px] h-[250px] rounded-[10px] border-[3px] border-[var(--orange)] bg-[var(--darkBlue)] px-[16px] py-[14px] mx-auto xl:mx-0"}
                        >
                            <div className={"relative mb-[45px]"}>
                                <span className={"font-medium text-3xl"}>0{index + 1}</span>
                                <Image className={"absolute -top-[25px] -right-[30px]"} src={"/assets/arrow-icon.png"}
                                       alt={"arrow icon"} width={83} height={119}/>
                            </div>
                            <span className={"font-medium text-2xl"}>{item.title}</span>
                        </li>
                    ))}</ul>
                <button
                    className={"bg-[var(--orange)] rounded-[24px] mx-auto px-[30px] py-[10px] font-bold text-lg block mt-[23px] hover:bg-yellow-500 transition-all sm:px-[37px] lg:text-xl lg:py-[16px]"}
                >
                    Узнать Подробнее
                </button>
            </div>
        </section>
    )
};

export default ServicesSection;