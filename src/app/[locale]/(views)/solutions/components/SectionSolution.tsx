'use client'

import {motion} from "framer-motion";
import Title from "@/components/Title";
import Image from "next/image";
import MnFAQItem from "./MnFAQItem";
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


interface IProps {
    solutionsData: {
        category: 'it-infrastructure' | 'system-software' | 'information-security';
        title: string;
        description: string[];
    }[]
}

export const SectionSolution = ({solutionsData}: IProps) => {
    const t = useTranslations("Home");

    const statisticList = [
        {
            img: "/assets/laptops-setting.png",
            title: t("solution_1"),
            width: 118,
            height: 113,
            key: "it-infrastructure",
            items: solutionsData.filter(item => item.category === 'it-infrastructure'),
        },
        {
            img: "/assets/pc-setting.png",
            title: t("solution_2"),
            width: 123,
            height: 115,
            key: 'system-software',
            items: solutionsData.filter(item => item.category === 'system-software'),
        },
        {
            img: "/assets/world-security.png",
            title: t("solution_3"),
            width: 122,
            height: 122,
            key: 'information-security',
            items: solutionsData.filter(item => item.category === 'information-security'),
        },
    ]


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
                <ul className={"grid grid-cols-1 gap-y-[20px] lg:grid-cols-3 lg:gap-[15px] xl:gap-[10px] "}>
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
                            {/*<div className={"grid gap-[8px] lg:hidden"}>*/}
                            <div className={"grid gap-[8px] mt-[10px] xl:mt-[16px]"}>
                                {item.items.map((i_item, i_index) => (
                                    <MnFAQItem
                                        key={i_index}
                                        index={i_index}
                                        zIndex={11 + statisticList.length - i_index}
                                        description={i_item.description}
                                        title={i_item.title}
                                        isYellow={i_index % 2 == 0}
                                    />
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                {/*<div className={"grid-cols-1 gap-x-[28px] gap-y-[11px] md:grid-cols-2 lg:grid-cols-3 hidden lg:grid"}>*/}
                {/*    {solutionsData.map((item, index) => (*/}
                {/*        <MnFAQItem*/}
                {/*            key={index}*/}
                {/*            index={index}*/}
                {/*            zIndex={11 + statisticList.length - index}*/}
                {/*            description={item.description}*/}
                {/*            title={item.title}*/}
                {/*            isYellow={index % 2 == 0}*/}
                {/*        />*/}
                {/*    ))}</div>*/}
            </div>
        </section>
    )
};

export default SectionSolution;