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
            <div
                // className={"mContainer pt-[116px] pb-[96px] px-[150px] relative"}
                className={"mContainer pt-[20px] pb-[30px] relative sm:pt-[30px] sm:pb-[40px] md:pt-[60px] md:pb-[50px] lg:pt-[100px] lg:pb-[80px] xl:pt-[116px] xl:pb-[96px]"}
            >


                <Title title={"Запишитесь на консультацию"}/>
                <div
                    // className={"grid grid-cols-2 gap-[20px]"}
                    className={"grid grid-cols-1 gap-[20px] lg:grid-cols-2"}
                >
                    <div>
                        <h4
                            // className={"font-bold text-3xl text-[var(--orange)] mb-[20px]"}
                            className={"font-bold text-xl text-[var(--orange)] mb-[12px] sm:text-2xl sm:mb-[14px] md:mb-[18px] md:text-center lg:text-start lg:text-2xl xl:text-3xl"}
                        >
                            Что вы получите:
                        </h4>
                        <ul
                            // className={"font-bold text-lg grid gap-[8px]"}
                            className={"font-medium text-sm grid gap-[8px] sm:text-lg md:w-[600px] md:mx-auto lg:w-full lg:text-lg lg:font-semibold xl:font-bold"}
                        >
                            {ourTargetsList.map((item, index) => (
                                <li
                                    key={index}
                                    // className={"flex items-center gap-x-[22px]"}
                                    className={"flex items-center gap-x-[22px]"}
                                >
                                    {item.icon}
                                    <span className={"flex-1"}>{item.title}</span>
                                </li>
                            ))}</ul>
                    </div>
                    {/* FORM */}
                    {/*<form className={"flex flex-col gap-[20px] text-2xl font-semibold"}>*/}
                    <form className={"flex flex-col gap-[5px] text-lg font-semibold md:text-xl lg:text-2xl"}>
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