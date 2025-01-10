import Title from "@/components/Title";
import Image from "next/image";
import {MiniOrnament} from "@/components/Icons";

export const SolutionSection = () => {
  const statisticList = [
    {
      img: "/assets/laptops-setting.png",
      title: "ИТ-инфраструктура",
      width: 118,
      height: 113,
    },
    {
      img: "/assets/pc-setting.png",
      title: "Системное ПО",
      width: 123,
      height: 115,
    },
    {
      img: "/assets/world-security.png",
      title: "Информационная безопасность",
      width: 122,
      height: 122,
    },
  ]

  return (
    <section className={"pt-[155px] pb-[123px] overflow-hidden"}>
      <div className={"relative mx-auto container"}>
        <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] right-0"}>
          {Array(11).fill(0).map((_, i) => (
            <MiniOrnament key={i}/>
          ))}
        </div>

        <Title title={"РЕШЕНИЕ"}/>
        <ul className={"grid grid-cols-3"}>
          {statisticList.map((item, index) => (
            <li key={index} className={"flex items-center gap-[10px] mx-auto"}>
              <div className={"w-[180px] h-[180px] rounded-full flex justify-center items-center bg-white/10"}>
                <Image src={item.img} alt={item.title} width={item.width} height={item.height}/>
              </div>
              <span className={"font-medium text-2xl"}>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
};

export default SolutionSection;