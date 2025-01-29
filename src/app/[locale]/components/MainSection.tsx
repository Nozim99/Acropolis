'use client'

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';


const MainSection = () => {
    const t = useTranslations("Home");


    function focusPartnerSection() {
        const section = document.getElementById("partner-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }


    return (
        <motion.section
            className={"bg-white w-full overflow-hidden relative ease-out pt-[30px]"}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <div
                className={"mContainer grid grid-cols-1 gap-x-[60px] pt-[10px] pb-[30px] items-center relative sm:pb-[50px] lg:grid-cols-2 lg:pt-[60px] lg:pb-[10px] xl:pt-[100px] xl:pb-[16px] xl:gap-x-[60px]"}>
                <motion.h1
                    initial={{opacity: 0, top: "50px"}}
                    whileInView={{opacity: 1, top: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.6}}
                    className={"text-[var(--orange)] font-bold text-4xl text-center pb-[40px] md:text-5xl lg:text-start lg:text-6xl xl:text-[100px] xl:leading-[7rem] relative"}
                >
                    <span className={"text-[var(--darkBlue)]"}>{t("we")} -</span> {t("group_exprest")}
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
                        {t("home_title")}
                    </p>
                </motion.div>
                <div className={"flex justify-center mt-[20px] sm:mt-[30px] lg:hidden"}>
                    <button
                        onClick={focusPartnerSection}
                        className={"bg-[#D8A227] font-medium px-[35px] py-[1px] rounded-full min-[400px]:text-lg min-[400px]:py-[3px] min-[400px]:px-[60px] md:font-semibold md:text-xl md:py-[8px] md:px-[90px]"}
                    >
                        {t("title_partner").charAt(0).toUpperCase() + t("title_partner").slice(1).toLowerCase()}
                    </button>
                </div>
            </div>
            <div className={"justify-center mt-[20px] sm:mt-[30px] hidden lg:flex mb-[100px]"}>
                <button
                    onClick={focusPartnerSection}
                    className={"bg-[#D8A227] font-medium px-[35px] py-[1px] rounded-full min-[400px]:text-lg min-[400px]:py-[3px] min-[400px]:px-[60px] md:font-semibold md:text-xl md:py-[8px] md:px-[90px] lg:text-2xl lg:py-[10px] lg:px-[120px] xl:px-[150px] xl:text-2xl xl:py-[13px] hover:bg-yellow-500 transition-colors"}
                >
                    {t("title_partner").charAt(0).toUpperCase() + t("title_partner").slice(1).toLowerCase()}
                </button>
            </div>
        </motion.section>
    )
}

export default MainSection;