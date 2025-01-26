'use client'

import {motion} from 'framer-motion';
import Image from "next/image";
import NavbarModal from "./NavbarModal";
import LanguageSelector from "@/app/components/LanguageInput";


const NavbarMobile = () => {
    return (
        <>
            <motion.header
                className={"bg-white sm:pt-[20px] sm:px-[10px] md:pt-[30px] md:px-[25px] lg:hidden"}
                initial={{opacity: 0}}
                whileInView={{opacity: 1,}}
                viewport={{once: true}}
                transition={{ease: "easeOut", duration: 0.7}}
            >
                <div className={"container mx-auto"}>
                    <div
                        className={"flex justify-between items-center py-[15px] bg-[var(--darkBlue)] px-[15px] sm:rounded-[10px] "}>
                        <motion.div
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.6, delay: 0.7}}
                        >
                            <Image
                                className={""}
                                src={"/assets/acropolis-logo.png"}
                                width={100}
                                height={40}
                                alt={"ACROPOLIS logo"}
                            />
                        </motion.div>
                        <div className={"flex items-center gap-[16px]"}>
                            <LanguageSelector/>
                            <NavbarModal/>
                        </div>
                    </div>
                </div>
            </motion.header>
        </>
    );
};

export default NavbarMobile;