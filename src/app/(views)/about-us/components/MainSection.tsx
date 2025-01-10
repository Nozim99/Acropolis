import {LeftIconOfSection, RightIconOfSection} from "@/components/Icons";

const MainSection = () => {
  return (
    <section className={"bg-white w-full overflow-hidden relative"}>
      <div className={"container mx-auto pt-[100px] pb-[160px] items-center relative"}>
        <div className={"main_section_icon_left"}><LeftIconOfSection/></div>
        <div className={"main_section_icon_right"}><RightIconOfSection/></div>

        <h1 className={"text-[var(--orange)] font-bold text-[100px] leading-[7rem] w-5/6"}>
          Что мы делаем и почему это важно
        </h1>
        <div className={"w-1/3 mt-[30px] ml-[20px]"}>
          <div className={"w-[60px] h-[5px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[24px]"}></div>
          <p className={"font-light text-2xl text-[var(--darkBlue)]"}>
            Имея более чем 10-летний опыт работы в ИТ, мы умеем решать актуальные задачи наших клиентов
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainSection;