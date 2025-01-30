'use client'

import {motion} from "framer-motion";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/routing";


const ServicesSection = () => {
    const t = useTranslations("Home");


    const cardList = [
        {
            url: "",
            title: t("service_1"),
        },
        {
            url: "",
            title: t("service_2"),
        },
        {
            url: "",
            title: t("service_3"),
        },
        {
            url: "",
            title: t("service_4"),
        },
    ]

    return (
        <section className={"pb-[27px] bg-white"}>
            <div className={"container mx-auto relative pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[78px]"}>

                <h2 className={"text-center font-bold lg:text-5xl mb-[35px] text-[var(--darkBlue)] text-3xl sm:text-4xl md:text-5xl"}>
                    {t("prices")?.toUpperCase()}
                </h2>
                <ul
                    className={"grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 sm:w-[540px] sm:mx-auto lg:w-full lg:grid-cols-4 xl:flex xl:justify-center xl:gap-x-[50px]"}
                >
                    {cardList.map((item, index) => (
                        <motion.li
                            initial={{opacity: 0, top: 100, scale: 0.7}}
                            whileInView={{opacity: 1, top: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                            key={index}
                            className={"relative w-[242px] h-[250px] rounded-[10px] border-[3px] border-[var(--orange)] bg-[var(--darkBlue)] px-[16px] py-[14px] mx-auto xl:mx-0"}
                        >
                            <div className={"relative mb-[45px]"}>
                                <span className={"font-medium text-3xl"}>0{index + 1}</span>
                                <Image className={"absolute -top-[25px] -right-[30px]"} src={"/assets/arrow-icon.png"}
                                       alt={"arrow icon"} width={83} height={119}/>
                            </div>
                            <span className={"font-medium text-2xl"}>{item.title}</span>
                        </motion.li>
                    ))}</ul>
                <div className={"flex justify-center mt-[23px]"}>
                    <Link href={"/prices"}>
                        <motion.button
                            initial={{opacity: 0, top: 100, scale: 0.7}}
                            whileInView={{opacity: 1, top: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                            className={"bg-[var(--orange)] rounded-[24px] mx-auto px-[30px] py-[10px] font-bold text-lg block hover:bg-yellow-500 transition-all sm:px-[37px] lg:text-xl lg:py-[16px]"}
                        >
                            {t("find_out_more")}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    )
};

export default ServicesSection;