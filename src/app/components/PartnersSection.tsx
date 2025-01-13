import {MiniOrnament, YellowCircleIcon} from "@/components/Icons";

const PartnersSection = () => {
    const partnersList = Array(12).fill("");

    return (
        <section className={""}>
            <div
                // className={"mContainer relative pt-[127px] pb-[68px]"}
                className={"mContainer relative pt-[30px] pb-[38px] sm:pt-[40px] md:pt-[60px] lg:pt-[127px] sm:pb-[48px] md:pb-[58px] lg:pb-[68px]"}
            >
                <div className={"flex flex-col absolute top-0 gap-y-[4px] -left-[90px]"}>
                  {Array(20).fill(0).map((_, i) => (
                    <MiniOrnament key={i}/>
                  ))}
                </div>
                {/*<div className={"absolute top-[450px] right-0"}><YellowCircleIcon /></div>*/}

                <h2
                    // className={"text-center font-bold text-5xl mb-[18px]"}
                    className={"text-center font-bold text-2xl mb-[18px] sm:text-3xl md:text-4xl mg:text-5xl"}
                >
                    ПАРТНЕРЫ
                </h2>
                <p
                    className={"font-light sm:text-lg md:text-xl lg:text-2xl text-center"}
                >
                    Мы сотрудничаем с ведущими мировыми производителями
                    оборудования
                    и ПО, что позволяет нам предлагать только проверенные решения:
                </p>
                <ul
                    // className={"grid grid-cols-4 gap-[38px] mx-auto w-[906px] mt-[46px]"}
                    className={"grid grid-cols-2 mt-[20px] gap-[20px] sm:grid-cols-3 md:grid-cols-4 lg:w-[870px] lg:mx-auto xl:w-[900px] md:mt-[30px] lg:mt-[46px]"}
                >
                    {partnersList.map((item, index) => (
                        <li
                            key={index}
                            // className={"w-[198px] h-[140px] bg-white"}
                            className={"h-[120px] bg-white lg:w-[198px] lg:mx-auto xl:h-[140px]"}
                        >

                        </li>
                    ))}</ul>
            </div>
        </section>
    )
}

export default PartnersSection;