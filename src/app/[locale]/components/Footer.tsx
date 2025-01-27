'use client'

import {motion} from 'framer-motion'
import Image from "next/image";
import {MailIcon, PhoneIcon} from "@/components/Icons";
import {socialMediaLinks} from "@/app/[locale]/utils/social_media_list";
import {navList} from "@/app/[locale]/utils/navList";
import Link from "next/link";
import {useTranslations} from 'next-intl';


const Footer = () => {
    const t = useTranslations("Home");

    return (
        <footer className={"bg-[#002B2C]"}>
            <div className={"mContainer pt-[30px] pb-[14px]"}>
                <div className={"grid grid-cols-1 items-start gap-y-[40px] md:grid-cols-3 lg:grid-cols-6"}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{ease: "easeOut", duration: 0.8}}
                    >
                        <Image
                            src={"/assets/acropolis-logo.png"}
                            className={"mx-auto lg:w-[140px] lg:h-auto"}
                            width={167}
                            height={98}
                            alt={"ACROPOLIS logo"}
                        />
                    </motion.div>

                    <div>
                        <motion.h4
                            className={"mb-[10px] text-center text-lg"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        >
                            {t("contact")}
                        </motion.h4>
                        <div
                            className={"flex items-center gap-x-[8px] mb-[14px] justify-center lg:gap-x-[4px] lg:text-sm xl:gap-x-[8px] xl:text-base"}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeOut", duration: 0.8}}
                            >
                                <PhoneIcon/>
                            </motion.div>
                            <ul>
                                <motion.li
                                    className={"relative"}
                                    initial={{opacity: 0, scale: 0.7, left: 20}}
                                    whileInView={{opacity: 1, scale: 1, left: 0}}
                                    viewport={{once: true}}
                                    transition={{ease: "easeOut", duration: 0.8}}
                                ><a href={"tel:+998938048414"}>+998 93 804 84 14</a></motion.li>
                                <motion.li
                                    className={"relative"}
                                    initial={{opacity: 0, scale: 0.7, left: 20}}
                                    whileInView={{opacity: 1, scale: 1, left: 0}}
                                    viewport={{once: true}}
                                    transition={{ease: "easeOut", duration: 0.8, delay: 0.3}}
                                ><a href="tel:+998900921828">+998 90 092 18 28</a></motion.li>
                            </ul>
                        </div>
                        <div className={"flex items-center gap-x-[8px] justify-center"}>
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeOut", duration: 0.8}}
                            >
                                <MailIcon/>
                            </motion.div>
                            <motion.a
                                href="mailto:info@acropolis.uz"
                                className={"relative"}
                                initial={{opacity: 0, scale: 0.7, left: 20}}
                                whileInView={{opacity: 1, scale: 1, left: 0}}
                                viewport={{once: true}}
                                transition={{ease: "easeOut", duration: 0.8}}
                            >
                                info@acropolis.uz
                            </motion.a>
                        </div>
                    </div>

                    <div className={"md:order-[2]"}>
                        <motion.h4
                            className={"mb-[10px] text-lg text-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        >
                            {t("social_media")}
                        </motion.h4>
                        <ul className={"flex items-center justify-center gap-x-[16px]"}>{
                            socialMediaLinks.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className={"relative"}
                                    initial={{opacity: 0, scale: 0.7, top: 20}}
                                    whileInView={{opacity: 1, scale: 1, top: 0}}
                                    viewport={{once: true}}
                                    transition={{ease: "easeOut", duration: 0.8, delay: 0.1 + index / 5}}
                                >
                                    <a href={item.link}>{item.icon}</a>
                                </motion.li>
                            ))
                        }</ul>
                    </div>

                    <div className={"flex justify-center"}>
                        <ul className={"grid gap-y-[13px] text-center"}>
                            {
                                navList.map((item, index) => (
                                    <motion.li
                                        key={item.path}
                                        className={"relative"}
                                        initial={{opacity: 0, scale: 0.9, left: 30}}
                                        whileInView={{opacity: 1, scale: 1, left: 0}}
                                        viewport={{once: true}}
                                        transition={{ease: "easeOut", duration: 0.8, delay: 0.1 + index / 5}}
                                    >
                                        <Link href={item.path}>
                                            {t(item.label)}
                                        </Link>
                                    </motion.li>
                                ))
                            }</ul>
                    </div>

                    <div className={"text-center md:order-2 md:col-span-2 md:text-start lg:ml-[34px]"}>
                        <motion.h4
                            className={"mb-[10px] text-lg text-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        >
                            {t("address")}
                        </motion.h4>
                        <motion.p
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        >
                            {t("current_address")}
                        </motion.p>
                    </div>
                </div>

                <motion.h5
                    className={"mt-[34px] text-center text-sm font-medium sm:text-base lg:text-lg xl:text-xl"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 0.8}}
                >
                    &copy; 2024 Acropolis Integro
                </motion.h5>
            </div>
        </footer>
    )
}

export default Footer;