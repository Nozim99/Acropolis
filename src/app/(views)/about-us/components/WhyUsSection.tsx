'use client'

import {motion} from 'framer-motion'
import Title from "@/components/Title";
import {TechnologyLampIcon, WorkGroupIcon} from "@/components/Icons";
import {useTranslation} from "react-i18next";

const WhyUsSection = () => {
    const {t} = useTranslation()

    return (
        <section className={"bg-white overflow-hidden"}>
            <div
                className={"mContainer pt-[25px] pb-[30px] relative sm:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px] sm:pb-[50px] md:pb-[70px] lg:pb-[100px] xl:pb-[110px]"}>

                <Title
                    title={t("why_us")}
                    className={"text-[var(--darkBlue)]"}
                    mb={"mb-[30px] md:mb-[50px] xl:mb-[60px] 2xl:mb-[70px]"}
                />
                <div
                    className={"flex flex-col items-center gap-y-[40px] md:flex-row md:justify-center md:gap-x-[40px] md:items-start lg:gap-x-[120px] xl:gap-x-[200px]"}>
                    <div className={"w-[270px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <div
                                className={"w-[140px] h-[140px] rounded-full bg-white flex items-center justify-center"}>
                                <div
                                    className={"w-[100px] h-[100px] rounded-full bg-[#2C6269] flex items-center justify-center text-2xl font-bold"}>100%
                                </div>
                            </div>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            {t("why_us_1")}
                        </motion.h4>
                    </div>
                    <div className={"w-[270px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <WorkGroupIcon/>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            {t("why_us_2")}
                        </motion.h4>
                    </div>
                    <div className={"w-[278px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <TechnologyLampIcon/>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            {t("why_us_3")}
                        </motion.h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection;