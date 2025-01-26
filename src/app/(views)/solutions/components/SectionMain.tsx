'use client'

import {motion} from 'framer-motion';
import {useTranslation} from "react-i18next";


const SectionMain = () => {
    const {t} = useTranslation();

    return (
        <section className={"bg-white w-full overflow-hidden relative pt-[30px] lg:h-[400px] xl:h-[470px]"}>
            <div
                className={"mContainer pt-[10px] pb-[40px] items-center relative sm:pt-[20px] sm:pb-[60px] md:pt-[40px] md:pb-[80px] lg:pt-[80px] lg:pb-[130px] xl:pt-[100px] xl:pb-[160px]"}>
                <motion.h1
                    className={"text-[var(--orange)] font-bold text-center text-5xl lg:text-start lg:text-7xl xl:text-[100px] xl:leading-[7rem] lg:mt-[40px]"}
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {t("solutions")}
                </motion.h1>
                <motion.img
                    // className={"absolute right-[70px] top-0 hidden lg:block"}
                    className={"w-5/6 mx-auto mt-[15px] sm:w-[400px] lg:absolute lg:w-[450px] lg:top-0 lg:right-[100px] xl:w-[550px]"}
                    src={"/assets/developers.png"}
                    alt={"Image"}
                    width={560}
                    height={373}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                />
            </div>
        </section>
    )
}

export default SectionMain;