'use client'

import {motion} from 'framer-motion';
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';


const partners_images = [
    'commvault.jpeg',
    'Fortinet .png',
    'Hitachi.png',
    'Juniper_Networks.png',
    'Lenovo.png',
    'Nutanix.jpeg',
    'Oracle.png',
    'Red_Hat.svg',
    'tenable.png',
    'trend_micro.jpeg',
    'veeam.png',
    'vertiv.jpeg'
]


const PartnersSection = () => {
    const t = useTranslations("Home");


    return (
        <section className={""}>
            <div
                className={"mContainer relative pt-[30px] pb-[38px] sm:pt-[40px] md:pt-[60px] lg:pt-[127px] sm:pb-[48px] md:pb-[58px] lg:pb-[68px]"}
            >
                <div className={"flex flex-col absolute top-0 gap-y-[4px] -left-[90px]"}>
                    {Array(20).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <motion.h2
                    initial={{opacity: 0, top: 20, scale: 0.7}}
                    whileInView={{opacity: 1, top: 0, scale: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 0.8}}
                    className={"text-center font-bold text-2xl mb-[18px] sm:text-3xl md:text-4xl mg:text-5xl relative"}
                >
                    {t("title_partner")}
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, top: 40, scale: 0.7}}
                    whileInView={{opacity: 1, top: 0, scale: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 0.8}}
                    className={"font-light sm:text-lg md:text-xl lg:text-2xl text-center relative"}
                >
                    {t("partner_desc")}
                </motion.p>
                <ul
                    className={"grid grid-cols-2 mt-[20px] gap-[20px] sm:grid-cols-3 md:grid-cols-4 lg:w-[870px] lg:mx-auto xl:w-[900px] md:mt-[30px] lg:mt-[46px]"}
                >
                    {partners_images.map((img_url, index) => (
                        <motion.li
                            key={index}
                            className={"h-[120px] bg-white lg:w-[198px] lg:mx-auto xl:h-[140px] relative flex items-center justify-center"}
                            initial={{opacity: 0, top: 40, scale: 0.7}}
                            whileInView={{opacity: 1, top: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        >
                            <img
                                className={"w-5/6 h-5/6 object-center object-contain"}
                                src={'/assets/partners/' + img_url}
                                alt=""
                            />
                        </motion.li>
                    ))}</ul>
            </div>
        </section>
    )
}

export default PartnersSection;