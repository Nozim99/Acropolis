import {MiniOrnament, YellowCircleIcon} from "@/components/Icons";

const PartnersSection = () => {
  const partnersList = Array(12).fill("");

  return (
    <section className={"overflow-hidden"}>
      <div className={"relative pt-[127px] pb-[68px] mx-auto container"}>
        <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] left-0"}>
          {Array(11).fill(0).map((_, i) => (
            <MiniOrnament key={i}/>
          ))}
        </div>
        <div className={"absolute top-[450px] right-0"}><YellowCircleIcon /></div>

        <h2 className={"text-center font-bold text-5xl mb-[18px]"}>ПАРТНЕРЫ</h2>
        <p className={"font-light text-2xl text-center"}>Мы сотрудничаем с ведущими мировыми производителями
          оборудования
          и ПО, что позволяет нам предлагать только проверенные решения:</p>
        <ul className={"grid grid-cols-4 gap-[38px] mx-auto w-[906px] mt-[46px]"}>{partnersList.map((item, index) => (
          <li key={index} className={"w-[198px] h-[140px] bg-white"}>

          </li>
        ))}</ul>
      </div>
    </section>
  )
}

export default PartnersSection;