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
        // <section className={"bg-white pt-[72px] pb-[42px]"}>
        <section className={"bg-white pt-[30px] pb-[42px] sm:pt-[40px] md:pt-[40px] lg:pt-[72px]"}>
            <div className={"mContainer relative"}>
                {/*<div className={"absolute top-0 right-0"}><FactsFillIcon/></div>*/}
                {/*<div className={"absolute bottom-[40px] -left-[60px]"}><FactsShapeIcon /></div>*/}

                <Title title={"ФАКТЫ О НАС"} className={"text-[var(--darkBlue)]"}/>
                {/*<div className={"mt-[45px] grid grid-cols-4"}>*/}
                {/*<div className={"mt-[45px] grid grid-cols-2 gap-[15px]"}>*/}
                <div
                    className={"mt-[45px] grid grid-cols-2 gap-[15px] w-[300px] mx-auto sm:gap-[25px] sm:w-[327px] md:w-[430px] lg:w-auto lg:grid-cols-4"}>
                    {
                        cardsList.map((card, index) => (
                            <div
                                key={card.image.url}
                                // className={"relative bg-[var(--orange)] w-[269px] h-[270px] rounded-[15px] p-[20px] flex flex-col justify-end mx-auto"}
                                className={`relative bg-[var(--orange)] w-[130px] h-[130px] rounded-[15px] py-[6px] px-[2px] flex flex-col justify-end mx-auto sm:w-[150px] sm:h-[150px] sm:py-[10px]
                                md:w-[200px] md:h-[200px] md:px-[6px] xl:w-[269px] xl:h-[270px] xl:p-[20px]`}
                            >
                                <Image
                                    // className={"absolute top-[8px] right-[8px]"}
                                    className={`
                                    ${
                                        index === 0
                                            ? "xl:w-[110px] xl:h-[110px]"
                                            : index === 1
                                                ? "xl:w-[111px] xl:h-[103px]"
                                                : index === 2
                                                    ? "xl:w-[100px] xl:h-[110px]"
                                                    : "xl:w-[125px] xl:h-[93px]"
                                    }
                                    absolute top-[10px] right-[10px] w-[50px] h-auto sm:w-[60px] md:w-[80px] xl:right-[8px] xl:top-[8px]`}
                                    src={card.image.url}
                                    width={card.image.width}
                                    height={card.image.height}
                                    alt={"statistic icon"}
                                />
                                <h4
                                    // className={"font-bold text-[100px] leading-[90px]"}
                                    className={"font-bold text-[30px] pl-[5px] sm:text-[35px] sm:pl-[8px] md:text-[60px] md:pl-0 xl:text-[100px] xl:leading-[90px]"}
                                >
                                    {card.value}
                                </h4>
                                <h5
                                    // className={"font-medium text-2xl text-center"}
                                    className={"text-[14px] text-center sm:text-base md:text-xl xl:font-medium"}
                                >
                                    {card.title}
                                </h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FactsAboutUs;