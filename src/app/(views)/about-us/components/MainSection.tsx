
const MainSection = () => {
  return (
    <section className={"bg-white w-full overflow-hidden relative"}>
      {/*<div className={"mContainer pt-[100px] pb-[160px] items-center relative"}>*/}
      <div className={"mContainer pb-[30px] items-center relative sm:pb-[40px] sm:pt-[10px] md:pt-[30px] md:pb-[60px] lg:pt-[80px] lg:pb-[120px] xl:pt-[100px] xl:pb-[160px]"}>

        {/*<h1 className={"text-[var(--orange)] font-bold text-[100px] leading-[7rem] w-5/6"}>*/}
        <h1 className={"text-[var(--orange)] font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-[85px] lg:leading-[6rem] xl:text-[100px] xl:leading-[7rem] lg:text-start"}>
          Что мы делаем и почему это важно
        </h1>
        {/*<div className={"w-1/3 mt-[30px] ml-[20px]"}>*/}
        <div className={"mt-[30px] ml-[20px]"}>
          {/*<div className={"w-[60px] h-[5px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[24px]"}></div>*/}
          <div className={"w-[60px] h-[2px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[6px] md:mb-[12px] md:h-[3px] lg:h-[4px] xl:h-[5px]"}></div>
          {/*<p className={"font-light text-2xl text-[var(--darkBlue)]"}>*/}
          <p className={"text-sm text-[var(--darkBlue)] sm:font-light sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:w-5/6"}>
            Обладая более чем 10-летним  опытом работы в сфере информационных технологий, мы не просто решаем задачи — мы находим оптимальные и эффективные решения для каждого заказчика.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainSection;