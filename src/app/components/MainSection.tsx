import {LeftIconOfSection, RightIconOfSection} from "@/components/Icons";

const MainSection = () => {
  return (
    <section className={"bg-white w-full overflow-hidden relative"}>
      <div className={"container mx-auto grid grid-cols-2 gap-x-[60px] pt-[100px] pb-[160px] items-center relative"}>
        <div className={"main_section_icon_left"}><LeftIconOfSection/></div>
        <div className={"main_section_icon_right"}><RightIconOfSection/></div>

        <h1 className={"text-[var(--orange)] font-bold text-[100px] leading-[7rem]"}><span
          className={"text-[var(--darkBlue)]"}>Мы -</span> команда экспертов</h1>
        <div>
          <div className={"w-[60px] h-[5px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[34px]"}></div>
          <p className={"font-light text-2xl text-[var(--darkBlue)]"}>
            Наша команда состоит из высококвалифицированных
            специалистов и обладает богатым опытом работы в ведущих международных ИТ-компаниях, крупных банках и
            телекоммуникационных операторах.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainSection;