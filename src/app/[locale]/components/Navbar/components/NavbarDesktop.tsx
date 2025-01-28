'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import {navList} from "@/app/[locale]/utils/navList";
import {OrnamentIcon} from "@/components/Icons";
import {useTranslations} from 'next-intl';
import LanguageSelector from "@/app/[locale]/components/LanguageInput";
import {Link, usePathname} from "@/i18n/routing";


const NavbarDesktop = () => {
    const t = useTranslations("Home");
    const pathname = usePathname()
    const isSpecialPath = ['/contact', '/solutions', '/prices'].includes(pathname);

    return (
        <motion.header
            className={`${isSpecialPath ? "" : "bg-white"} pb-[20px] hidden lg:block`}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{ease: "easeOut", duration: 0.8}}
        >
            <motion.div
                className={"absolute top-0 left-0 right-0 overflow-hidden flex justify-center"}
                initial={{opacity: 0, scale: 0.7}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 0.8, delay: 0.7}}
            >
                <OrnamentIcon className={"w-[1600px] h-auto"}/>
            </motion.div>
            <div className={"h-[60px]"}></div>
            <nav
                className={`${isSpecialPath ? "shadow-lg border border-black/10" : ""} flex justify-between items-center px-[25px] py-[8px] container mx-auto bg-[var(--darkBlue)] rounded-[14px] font-light text-xl xl:text-2xl`}>
                <motion.div
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 0.6, delay: 0.7}}
                >
                    <Image src={"/assets/acropolis-logo.png"} width={153} height={70} alt={"ACROPOLIS logo"}/>
                </motion.div>
                <ul className={"flex items-center gap-x-[20px] xl:gap-x-[49px]"}>
                    {
                        navList.map((item, index) => (
                            <motion.li
                                key={item.path}
                                initial={{opacity: 0, scale: 0.7}}
                                whileInView={{opacity: 1, scale: 1}}
                                viewport={{once: true}}
                                transition={{ease: "easeOut", duration: 0.6, delay: 0.8 + index / 5}}
                            >
                                <Link href={item.path}>
                                    {t(item.label)}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
                <LanguageSelector/>
            </nav>
        </motion.header>
    );
};

export default NavbarDesktop;