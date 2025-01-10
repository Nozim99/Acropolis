import Title from "@/components/Title";
import {ChartIcon, MiniOrnament, PersonIcon, SuccessSettingIcon, YellowCircleIcon} from "@/components/Icons";
import FormButton from "./FormButton"

const Index = () => {
  const ourTargetsList = [
    {
      title: "Качество нашей сети талантов",
      icon: <PersonIcon/>,
    },
    {
      title: "Использование и внедрение нашего программного обеспечения",
      icon: <SuccessSettingIcon/>,
    },
    {
      title: "Как мы помогаем продвигать инновации",
      icon: <ChartIcon/>,
    },
  ]

  return (
    <section className={"overflow-hidden"}>
      <div className={"container mx-auto pt-[116px] pb-[96px] px-[150px] relative"}>
        <div className={"absolute top-[30px] -left-[120px]"}><YellowCircleIcon/></div>
        <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] right-0"}>
          {Array(11).fill(0).map((_, i) => (
            <MiniOrnament key={i}/>
          ))}
        </div>

        <Title title={"Запишитесь на консультацию"}/>
        <div className={"grid grid-cols-2 gap-[20px]"}>
          <div>
            <h4 className={"font-bold text-3xl text-[var(--orange)] mb-[20px]"}>Что вы получите:</h4>
            <ul className={"font-bold text-lg grid gap-[8px]"}>{ourTargetsList.map((item, index) => (
              <li key={index} className={"flex items-center gap-x-[22px]"}>
                {item.icon}
                <span>{item.title}</span>
              </li>
            ))}</ul>
          </div>
          {/* FORM */}
          <form className={"flex flex-col gap-[20px] text-2xl font-semibold"}>
            <input placeholder={"Имя "} className={"input"} type="text" id={"name"}/>
            <input placeholder={"E-mail"} className={"input"} type="text" id={"email"}/>
            <input placeholder={"Название компании "} className={"input"} type="text" id={"company"}/>
            <FormButton/>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Index;