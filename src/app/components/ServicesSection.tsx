import Image from "next/image";
import {BlueCircleIcon, FactsFillIcon} from "@/components/Icons";

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
      <div className={"container mx-auto relative pt-[78px]"}>
        <div className={"absolute -top-[10px] left-[10px]"}>
          <BlueCircleIcon />
        </div>
        <div className={"absolute right-[160px] top-[80px]"}>
          <FactsFillIcon />
        </div>

        <h2 className={"text-center font-bold text-5xl mb-[35px] text-[var(--darkBlue)]"}>УСЛУГИ</h2>
        <ul className={"flex justify-center gap-x-[50px]"}>{cardList.map((item, index) => (
          <li key={index}
              className={"relative w-[242px] h-[250px] rounded-[10px] border-[3px] border-[var(--orange)] bg-[var(--darkBlue)] px-[16px] py-[14px]"}>
            <div className={"relative mb-[45px]"}>
              <span className={"font-medium text-3xl"}>0{index + 1}</span>
              <Image className={"absolute -top-[25px] -right-[30px]"} src={"/assets/arrow-icon.png"} alt={"arrow icon"} width={83} height={119}/>
            </div>
            <span className={"font-medium text-2xl"}>{item.title}</span>
          </li>
        ))}</ul>
        <button className={"bg-[var(--orange)] rounded-[24px] mx-auto px-[37px] py-[16px] font-bold text-xl block mt-[23px] hover:bg-yellow-500 transition-all"}>Узнать  Подробнее</button>
      </div>
    </section>
  )
};

export default ServicesSection;