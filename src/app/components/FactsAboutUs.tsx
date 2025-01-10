import Title from "@/components/Title";
import Link from "next/link";
import Image from "next/image";
import {FactsFillIcon, FactsShapeIcon} from "@/components/Icons";

const FactsAboutUs = () => {
  const cardsList = [
    {
      image: {
        url: "/assets/Earth.png",
        width: 110,
        height: 110,
      },
      value: "5+",
      title: "стран реализации проектов",
    },
    {
      image: {
        url: "/assets/Rating.png",
        width: 111,
        height: 103,
      },
      value: "30+",
      title: "довольных заказчиков",
    },
    {
      image: {
        url: "/assets/Expertise.png",
        width: 100,
        height: 110,
      },
      value: "10+",
      title: "лет опыта команды",
    },
    {
      image: {
        url: "/assets/Deal.png",
        width: 125,
        height: 93,
      },
      value: "12+",
      title: "партнеров",
    },
  ]

  return (
    <section className={"bg-white pt-[72px] pb-[42px]"}>
      <div className={"container mx-auto relative"}>
        <div className={"absolute top-0 right-0"}><FactsFillIcon/></div>
        <div className={"absolute bottom-[40px] -left-[60px]"}><FactsShapeIcon /></div>

        <Title title={"ФАКТЫ О НАС"} className={"text-[var(--darkBlue)]"}/>
        <div className={"mt-[45px] grid grid-cols-4"}>
          {
            cardsList.map((card, index) => (
              <div
                key={card.image.url}
                className={"relative bg-[var(--orange)] w-[269px] h-[270px] rounded-[15px] p-[20px] flex flex-col justify-end mx-auto"}
              >
                <Image src={card.image.url} className={"absolute top-[8px] right-[8px]"} width={card.image.width}
                       height={card.image.height} alt={"statistic icon"}/>
                <h4 className={"font-bold text-[100px] leading-[90px]"}>{card.value}</h4>
                <h5 className={"font-medium text-2xl text-center"}>{card.title}</h5>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default FactsAboutUs;