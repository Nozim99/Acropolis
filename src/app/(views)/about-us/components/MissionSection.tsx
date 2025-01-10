import Image from "next/image"
import Title from "@/components/Title";
import {MiniOrnament} from "@/components/Icons";

const MissionSection = () => {
  return (
    <section>
      <div className="container mx-auto pt-[57px] pb-[99px] relative">
        <Image className={"absolute bottom-0 right-0"} src={"/assets/arrows-up.png"} width={718} height={631}
               alt={"arrows image"}/>
        <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] -left-[80px]"}>
          {Array(11).fill(0).map((_, i) => (
            <MiniOrnament key={i}/>
          ))}
        </div>

        <div className={"grid grid-cols-2 gap-x-[34px]"}>
          <div className="h-[435px] bg-gradient-to-t from-[#FCC612B2] to-transparent flex justify-center">
            <Image src={"/assets/3-people.png"} width={622} height={435} alt={"image"}/>
          </div>
          <div>
            <Title title={"МИССИЯ КОМПАНИИ"}/>
            <p className={"text-2xl font-light"}>Наша миссия - способствовать развитию цифровой экосистемы Республики
              Узбекистан, предоставляя высококачественные ИТ-решения и услуги по информационной безопасности. Опираясь
              на богатый опыт наших специалистов в ведущих системных интеграторах, мы стремимся стать надежным партнером
              для наших клиентов, обеспечивая им передовые технологии и инновационные подходы для достижения их
              бизнес-целей.</p>
          </div>
        </div>
        <div className={"mt-[90px] w-1/2"}>
          <Title title={"ИСТОРИЯ КОМПАНИИ"}/>
          <p className={"text-2xl font-light"}>1 октября 2024 года наша команда супергероев дали старт новому бизнесу
            Мы объединили все лучшее из нашего опыта и экспертизы, накопленных в работе с клиентами из разных
            отраслей</p>
        </div>
      </div>
    </section>
  )
}

export default MissionSection;
