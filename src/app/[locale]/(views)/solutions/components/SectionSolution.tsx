'use client'

import {motion} from "framer-motion";
import Title from "@/components/Title";
import Image from "next/image";
import MnFAQItem from "./MnFAQItem";
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


export const SectionSolution = () => {
    const t = useTranslations("Home");

    const statisticList = [
        {
            img: "/assets/laptops-setting.png",
            title: t("solution_1"),
            width: 118,
            height: 113,
            items: [
                {
                    title: t("solution_title_1"),
                    description: t("solution_description_1"),
                    isYellow: true,
                },
                {
                    title: t("solution_title_4"),
                    description: t("solution_description_4"),
                    isYellow: false,
                },
                {
                    title: t("solution_title_7"),
                    description: t("solution_description_7"),
                    isYellow: true,
                },
                {
                    title: t("solution_title_10"),
                    description: t("solution_description_10"),
                    isYellow: false,
                },
            ]
        },
        {
            img: "/assets/pc-setting.png",
            title: t("solution_2"),
            width: 123,
            height: 115,
            items: [
                {
                    title: t("solution_title_2"),
                    description: t("solution_description_2"),
                    isYellow: true,
                },
                {
                    title: t("solution_title_5"),
                    description: t("solution_description_5"),
                    isYellow: false,
                },
                {
                    title: t("solution_title_8"),
                    description: t("solution_description_8"),
                    isYellow: true,
                },
                {
                    title: t("solution_title_11"),
                    description: t("solution_description_11"),
                    isYellow: false,
                },
            ]
        },
        {
            img: "/assets/world-security.png",
            title: t("solution_3"),
            width: 122,
            height: 122,
            items: [
                {
                    title: t("solution_title_3"),
                    description: t("solution_description_3"),
                    isYellow: true,
                },
                {
                    title: t("solution_title_6"),
                    description: t("solution_description_6"),
                    isYellow: false,
                },
                {
                    title: t("solution_title_9"),
                    description: t("solution_description_9"),
                    isYellow: true,
                },
            ]
        },
    ]

    const solutionsList = [
        {
            title: t("solution_title_1"),
            description: t("solution_description_1"),
            isYellow: true,
        },
        {
            title: t("solution_title_2"),
            description: t("solution_description_2"),
            isYellow: true,
        },
        {
            title: t("solution_title_3"),
            description: t("solution_description_3"),
            isYellow: true,
        },
        {
            title: t("solution_title_4"),
            description: t("solution_description_4"),
            isYellow: false,
        },
        {
            title: t("solution_title_5"),
            description: t("solution_description_5"),
            isYellow: false,
        },
        {
            title: t("solution_title_6"),
            description: t("solution_description_6"),
            isYellow: false,
        },
        {
            title: t("solution_title_7"),
            description: t("solution_description_7"),
            isYellow: true,
        },
        {
            title: t("solution_title_8"),
            description: t("solution_description_8"),
            isYellow: true,
        },
        {
            title: t("solution_title_9"),
            description: t("solution_description_9"),
            isYellow: true,
        },
        {
            title: t("solution_title_10"),
            description: t("solution_description_10"),
            isYellow: false,
        },
        {
            title: t("solution_title_11"),
            description: t("solution_description_11"),
            isYellow: false,
        },
    ];


    return (
        <section className={""}>
            <div
                className={"mContainer pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[60px] xl:pt-[70px] relative pb-[15px] sm:pb-[16px] md:pb-[17px] lg:pb-[18px] xl:pb-[20px]"}>
                <div className={"flex-col absolute top-0 gap-y-[4px] -left-[90px] hidden lg:flex"}>
                    {Array(20).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <Title
                    className={"hidden lg:block"}
                    title={t("solution")}
                />
                <ul className={"grid grid-cols-1 gap-y-[20px] lg:grid-cols-3 lg:gap-[15px] xl:gap-0 "}>
                    {statisticList.map((item, index) => (
                        <li key={index} className={"mb-[30px]"}>
                            <motion.div
                                className={"flex items-center gap-[10px] flex-col lg:flex-row mb-[14px] lg:mb-0"}
                                initial={{opacity: 0, scale: 0.7}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{duration: 0.7}}
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
                                    className={"font-medium text-lg flex-1 sm:text-center lg:text-start lg:text-xl xl:text-2xl"}>{item.title}</span>
                            </motion.div>
                            <div className={"grid gap-[8px] lg:hidden"}>
                                {item.items.map((item, index) => (
                                    <MnFAQItem
                                        key={index}
                                        index={index}
                                        zIndex={11 + statisticList.length - index}
                                        {...item}
                                        description={item.description}
                                    />
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={"grid-cols-1 gap-x-[28px] gap-y-[11px] md:grid-cols-2 lg:grid-cols-3 hidden lg:grid"}>
                    {solutionsList.map((item, index) => (
                        <MnFAQItem
                            key={index}
                            index={index}
                            zIndex={11 + statisticList.length - index}
                            {...item}
                            description={item.description}
                        />
                    ))}</div>
            </div>
        </section>
    )
};

export default SectionSolution;