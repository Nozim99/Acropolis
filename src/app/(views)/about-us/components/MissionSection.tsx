import Image from "next/image"
import Title from "@/components/Title";
import {MiniOrnament} from "@/components/Icons";

const MissionSection = () => {
    return (
        <section className={"overflow-hidden"}>
            <div className="mContainer pt-[57px] pb-[30px] relative md:mb-[40px] lg:mb-[80px] xl:mb-[99px]">
                <Image
                    className={"absolute bottom-0 right-0 hidden lg:block lg:w-[490px] lg:h-auto xl:w-[550px]"}
                    src={"/assets/arrows-up.png"}
                    width={718}
                    height={631}
                    alt={"arrows image"}
                />
                <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] -left-[80px]"}>
                    {Array(20).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                {/*<div className={"grid grid-cols-2 gap-x-[34px]"}>*/}
                <div className={"lg:grid lg:grid-cols-2 lg:gap-x-[25px] xl:gap-x-[34px]"}>
                    <div className={"lg:hidden"}>
                        <Title title={"МИССИЯ КОМПАНИИ"}/>
                    </div>
                    {/*<div className="h-[435px] bg-gradient-to-t from-[#FCC612B2] to-transparent flex justify-center">*/}
                    <div
                        className="h-[200px] w-[300px] mx-auto bg-gradient-to-t from-[#FCC612B2] to-transparent flex justify-center sm:w-[320px] sm:h-[210] lg:h-[400px] lg:w-full xl:h-[435px]">
                        <Image src={"/assets/3-people.png"} width={622} height={435} alt={"image"}/>
                    </div>
                    <div>
                        <div className={"hidden lg:block lg:mt-[15px]"}>
                            <Title title={"МИССИЯ КОМПАНИИ"}/>
                        </div>
                        {/*<p className={"text-2xl font-light"}>*/}
                        <p className={"text-sm mt-[10px] sm:text-base sm:mt-[20px] md:text-lg lg:text-xl xl:text-2xl"}>
                            Наша миссия - способствовать развитию цифровой экосистемы
                            Республики
                            Узбекистан, предоставляя высококачественные ИТ-решения и услуги по информационной
                            безопасности. Опираясь
                            на богатый опыт наших специалистов в ведущих системных интеграторах, мы стремимся стать
                            надежным партнером
                            для наших клиентов, обеспечивая им передовые технологии и инновационные подходы для
                            достижения их
                            бизнес-целей.
                        </p>
                    </div>
                </div>
                {/*<div className={"mt-[90px] w-1/2"}>*/}
                <div className={"mt-[40px] lg:w-1/2 lg:mt-[70px]"}>
                    <Title title={"ИСТОРИЯ КОМПАНИИ"}/>
                    <p className={"text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"}>
                        1 октября 2024 года наша команда супергероев дали старт новому
                        бизнесу
                        Мы объединили все лучшее из нашего опыта и экспертизы, накопленных в работе с клиентами из
                        разных
                        отраслей
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MissionSection;
