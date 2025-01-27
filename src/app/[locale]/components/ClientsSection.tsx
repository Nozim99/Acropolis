import Image from "next/image";
import {BlueCircleIcon, FactsShapeIcon} from "@/components/Icons";

const ClientsSection = () => {
  const clientsList = [
    {
      img: "/assets/the-verge.png",
      width: 188,
      height: 52,
    },
    {
      img: "/assets/the-jakarta-post.png",
      width: 209,
      height: 43,
    },
    {
      img: "/assets/the-guardian.png",
      width: 205,
      height: 52,
    },
    {
      img: "/assets/techradar.png",
      width: 188,
      height: 52,
    },
    {
      img: "/assets/gadgets.png",
      width: 111,
      height: 84,
    },
  ]

  return (
    <section className={"bg-white"}>
      <div className={"pt-[127px] pb-[27px] container mx-auto relative"}>
        <div className={"absolute top-[40px] left-0"}><BlueCircleIcon /></div>
        <div className={"absolute top-[70px] right-[135px]"}><FactsShapeIcon /></div>

        <h2 className={"text-center font-bold text-5xl text-[var(--orange)] mb-[82px]"}>НАШИ КЛИЕНТЫ</h2>
        <ul className={"flex items-center justify-center gap-x-[90px]"}>{clientsList.map((item, index) => (
          <li key={index}>
            <Image src={item.img} alt={`client${index + 1}`} width={item.width} height={item.height}/>
          </li>
        ))}</ul>
      <button
        className={"bg-[var(--orange)] rounded-[24px] mx-auto px-[55px] py-[10px] font-semibold text-xl block mt-[63px] hover:bg-yellow-500 transition-all"}>
        Подробнее
      </button>
      </div>
    </section>
  )
};

export default ClientsSection;