'use client'

import {motion} from 'framer-motion'
import {useTranslation} from "react-i18next";

const SectionMain = () => {
    const {t} = useTranslation();

    return (
        <section className={"bg-white w-full overflow-hidden relative pt-[30px]"}>
            <div
                className={"mContainer pt-[10px] pb-[40px] items-center relative sm:pt-[20px] sm:pb-[60px] md:pt-[40px] md:pb-[80px] lg:pt-[80px] lg:pb-[130px] xl:pt-[100px] xl:pb-[160px]"}>
                <motion.img
                    className={"absolute right-[80px] xl:right-[230px] top-0 hidden lg:block"}
                    src={"/assets/location.png"}
                    alt={"Image"}
                    width={397}
                    height={381}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                />

                <motion.h1
                    className={"text-[var(--orange)] font-bold text-center text-5xl lg:text-start lg:text-7xl xl:text-[100px] xl:leading-[7rem]"}
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {t("contact")}
                </motion.h1>
                <div className={"mt-[30px] min-[320px]:w-[300px] mx-auto sm:w-[340px] md:w-[420px] lg:w-5/12 lg:mx-0"}>
                    <motion.div
                        className={"w-[40px] h-[2px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[8px] lg:w-[60px] lg:h-[5px] lg:mb-[20px] xl:mb-[24px]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, delay: 0.7}}
                    ></motion.div>
                    <motion.p
                        className={"text-sm sm:text-base md:text-lg lg:text-xl lg:font-light xl:text-2xl text-[var(--darkBlue)]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {t("experience_desc")}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default SectionMain;