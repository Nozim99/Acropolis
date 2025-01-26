'use client'

import {motion} from 'framer-motion'
import {useTranslation} from "react-i18next";


const MainSection = () => {
    const {t} = useTranslation()

    return (
        <section className={"bg-white w-full overflow-hidden relative pt-[30px]"}>
            <div
                className={"mContainer pb-[30px] items-center relative sm:pb-[40px] sm:pt-[10px] md:pt-[30px] md:pb-[60px] lg:pt-[80px] lg:pb-[120px] xl:pt-[100px] xl:pb-[160px]"}>

                <motion.h1
                    className={"text-[var(--orange)] font-bold text-3xl text-center sm:text-4xl md:text-5xl lg:text-[85px] lg:leading-[6rem] xl:text-[100px] xl:leading-[7rem] lg:text-start"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {t("about_us_title")}
                </motion.h1>
                <div className={"mt-[30px] ml-[20px]"}>
                    <motion.div
                        className={"w-[60px] h-[2px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[6px] md:mb-[12px] md:h-[3px] lg:h-[4px] xl:h-[5px]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, delay: 0.7}}
                    ></motion.div>
                    <motion.p
                        className={"text-sm text-[var(--darkBlue)] sm:font-light sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:w-5/6"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {t("about_us_desc")}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default MainSection;