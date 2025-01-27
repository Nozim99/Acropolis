'use client'

import {motion} from "framer-motion"
import Title from "@/components/Title";
import Image from "next/image";
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


export const SolutionSection = () => {
    const t = useTranslations("Home");

    const statisticList = [
        {
            img: "/assets/laptops-setting.png",
            title: t("solution_1"),
            width: 118,
            height: 113,
        },
        {
            img: "/assets/pc-setting.png",
            title: t("solution_2"),
            width: 123,
            height: 115,
        },
        {
            img: "/assets/world-security.png",
            title: t("solution_3"),
            width: 122,
            height: 122,
        },
    ]

    return (
        <section className={"py-[50px] overflow-hidden sm:py-[70px] lg:pt-[155px] lg:pb-[123px]"}>
            <div className={"mContainer relative"}>
                <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] -right-[30px]"}>
                    {Array(11).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <Title title={t("solution")}/>
                <ul className={"grid grid-cols-1 gap-y-[20px] sm:grid-cols-3 lg:gap-[15px] xl:gap-0"}>
                    {statisticList.map((item, index) => (
                        <motion.li
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                            key={index} className={"flex items-center gap-[10px] flex-col lg:flex-row"}
                        >
                            <div
                                className={`w-[100px] h-[100px] rounded-full flex justify-center items-center bg-white/10 p-[18px] sm:w-[130px] sm:h-[130px] sm:p-[24px] lg:w-[120px] lg:h-[120px]
                                xl:w-[180px] xl:h-[180px]`}>
                                <Image
                                    className={`${
                                        index === 0
                                            ? "xl:w-[118px] xl:h-[113px]"
                                            : index === 1
                                                ? "xl:w-[123px] xl:h-[115px]"
                                                : "xl:w-[122px] xl:h-[122px]"
                                    }                                    
                                    w-full h-full object-center object-cover`}
                                    src={item.img}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                />
                            </div>
                            <span
                                className={"font-medium text-lg flex-1 sm:text-center lg:text-start lg:text-xl"}>{item.title}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default SolutionSection;