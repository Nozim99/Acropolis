'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import MnFAQItem from "./MnFAQItem"
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


interface PropsType {
    servicesData?: {
        _id: string;
        title: string;
        description: string;
    }[]
}

const SectionCategories = ({servicesData}: PropsType) => {
    const t = useTranslations("Home");

    const pricesList = [
        {
            title: t("service_1"),
            description: t("service_desc_1")
        },
        {
            title: t("service_2"),
            description: t("service_desc_2")
        },
        {
            title: t("service_3"),
            description: t("service_desc_3")
        },
        {
            title: t("service_4"),
            description: t("service_desc_4")
        }
    ];


    return (
        <section className={"bg-[var(--darkBlue)] lg:bg-white relative "}>
            <div className={"absolute top-0 bottom-0 left-0 w-[45%] hidden lg:block"}></div>
            <div
                className={"mContainer relative flex justify-center gap-x-[25px] pt-[30px] sm:pt-[35px] md:pt-[43px] pb-[20px]"}>

                <div className={"flex-col absolute top-full gap-y-[4px] -right-[90px] hidden lg:flex"}>
                    {Array(15).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>


                <motion.div
                    className={"hidden lg:flex justify-end flex-1 items-center"}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {/*<div className={"rounded-full bg-[var(--darkBlue)] mr-[120px] w-[523px] h-[523px]"}>*/}
                    <div className={"rounded-full bg-[var(--darkBlue)] mr-[120px] w-[380px] h-[380px] xl:w-[523px] xl:h-[523px] overflow-hidden relative bg_shadow"}>
                        <Image
                            className={"w-[320px] h-[320px] absolute top-1/2 -translate-y-1/2 left-0 xl:h-[442px] xl:w-[425px]"}
                            src={"/assets/solutions.png"}
                            alt={"categories image"}
                            width={455}
                            height={455}
                        />
                    </div>
                </motion.div>

                <div className={"flex-1"}>
                    <motion.h2
                        className={"title text-center  lg:text-start lg:text-[var(--darkBlue)] mb-[20px] sm:mb-[30px] lg:mb-[45px]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {t("prices")}
                    </motion.h2>
                    <div className={"flex flex-col gap-[8px]"}>
                        {servicesData?.map((item, index) => (
                            <MnFAQItem
                                key={index}
                                itemNumber={"0" + (index + 1)}
                                isDark={index % 2 === 1}
                                title={item.title}
                                description={item.description}
                                zIndex={11 + pricesList.length - index}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCategories;