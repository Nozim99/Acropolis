'use client'

import {motion} from 'framer-motion';
import {CloseIcon, MenuIcon} from "@/components/Icons";
import {navList} from "@/app/[locale]/utils/navList";
import {Link} from "@/i18n/routing";
import {useState} from "react";
import {useTranslations} from 'next-intl';


const NavbarModal = () => {
    const t = useTranslations("Home");
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{opacity: 0, scale: 0.7}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 0.6, delay: 0.8}}
            >
                <MenuIcon/>
            </motion.button>

                    <div className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity fixed inset-0 z-50 bg-black/30`}></div>
                    <div
                        key={String(isOpen)}
                        className={`${isOpen ? "left-0 min-[400px]:right-0 min-[400px]:left-auto" : "left-full min-[400px]:-right-full min-[400px]:left-auto"} transition-all duration-300 ease-out fixed w-full h-full
                        top-0 left-0 bg-[var(--darkBlue)] z-50 lg:hidden min-[400px]:w-[350px] md:w-[400px]`}>
                        <div
                            className={"relative flex flex-col items-center gap-y-[5px] justify-center md:gap-y-[10px]"}>
                            <div className={"flex items-center justify-between p-[20px] border-b border-white/10 w-full mb-[20px] sm:mb-[30px]"}>
                                <h4 className={"text-lg sm:text-xl md:text-2xl"}>Menu</h4>
                                <button onClick={() => setIsOpen(false)} className={""}>
                                    <CloseIcon className={"w-[18px]"} />
                                </button>
                            </div>

                            {
                                navList.map((item, index) => (
                                    <motion.div
                                        className={"relative text-2xl md:text-2xl"}
                                        key={item.path}
                                        initial={{opacity: 0, scale: 0.7, left: 50}}
                                        whileInView={{opacity: 1, scale: 1, left: 0}}
                                        transition={{ease: "easeOut", duration: 0.2, delay: 0.2 + index / 8}}
                                    >
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            href={item.path}
                                            key={item.path}>
                                            {t(item.label)}
                                        </Link>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
        </>
    )
}

export default NavbarModal;