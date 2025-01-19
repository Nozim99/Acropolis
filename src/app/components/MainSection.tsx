'use client'

import {motion} from 'framer-motion';


const MainSection = () => {
    return (
        <motion.section
            className={"bg-white w-full overflow-hidden relative ease-out"}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <div
                className={"mContainer grid grid-cols-1 gap-x-[60px] pt-[10px] pb-[30px] items-center relative sm:pb-[50px] lg:grid-cols-2 lg:pt-[60px] lg:pb-[120px] xl:pt-[100px] xl:pb-[160px] xl:gap-x-[60px]"}>
                <motion.h1
                    initial={{opacity: 0, top: "50px"}}
                    whileInView={{opacity: 1, top: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.6}}
                    className={"text-[var(--orange)] font-bold text-4xl text-center pb-[40px] md:text-5xl lg:text-start lg:text-6xl xl:text-[100px] xl:leading-[7rem] relative"}
                >
                    <span className={"text-[var(--darkBlue)]"}>Мы -</span> команда экспертов
                </motion.h1>
                <motion.div
                    className={"relative top-[50px]"}
                    initial={{opacity: 0, top: "50px"}}
                    whileInView={{opacity: 1, top: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.6}}
                >
                    <div
                        className={"w-[40px] h-[3px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[10px] mx-auto sm:w-[60px] md:w-[100px] lg:w-[60px] lg:mx-0 xl:w-[60px] xl:h-[5px] xl:mb-[34px]"}></div>
                    <p className={"font-normal text-sm text-center text-[var(--darkBlue)] sm:text-base md:text-xl lg:text-start xl:font-light xl:text-2xl"}>
                        Наша команда состоит из высококвалифицированных специалистов и обладает богатым опытом работы в
                        ведущих международных ИТ-компаниях, крупных банках и телекоммуникационных операторах.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default MainSection;