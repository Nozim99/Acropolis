'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import MnFAQItem from "./MnFAQItem"
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


const SectionCategories = () => {
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
            <div className={"absolute top-0 bottom-0 left-0 w-[45%] prices_categories_bg hidden lg:block"}></div>
            <div
                className={"mContainer relative flex justify-center gap-x-[25px] pt-[30px] sm:pt-[35px] md:pt-[43px] pb-[20px]"}>

                <div className={"flex-col absolute top-full gap-y-[4px] -right-[90px] hidden lg:flex"}>
                    {Array(15).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>


                <motion.div
                    className={"hidden lg:flex justify-end flex-1 items-end"}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <Image
                        className={"bg-[var(--darkBlue)] rounded-full mr-[120px]"}
                        src={"/assets/prices-categories.png"}
                        alt={"categories image"}
                        width={455}
                        height={455}
                    />
                </motion.div>

                <div className={"flex-1"}>
                    <motion.h2
                        className={"hidden lg:block title text-center lg:text-start lg:text-[var(--darkBlue)] mb-[45px]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {t("prices")}
                    </motion.h2>
                    <div className={"flex flex-col gap-[8px]"}>
                        {pricesList.map((item, index) => (
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