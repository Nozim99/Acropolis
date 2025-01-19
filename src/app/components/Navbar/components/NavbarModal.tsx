'use client'

import {motion} from 'framer-motion';
import {createPortal} from "react-dom";
import {CloseIcon, MenuIcon} from "@/components/Icons";
import {navList} from "@/app/utils/navList";
import Link from "next/link";
import {useState} from "react";


const NavbarModal = () => {
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

            {
                isOpen &&
                createPortal(
                    <div
                        className={"description_modal_bg fixed inset-0 bg-[var(--darkBlue)] z-50 w-screen h-screen flex justify-center items-center top-0 left-0 sm:w-1/2 sm:right-0 sm:left-auto md:w-5/12 lg:hidden"}>
                        <div
                            className={"relative flex flex-col items-center gap-y-[5px] justify-center sm:absolute sm:top-[150px] sm:text-xl sm:font-medium sm:gap-y-[7px] md:top-[170px]"}>
                            <button onClick={() => setIsOpen(false)} className={"absolute -right-[40px] -top-[40px]"}>
                                <CloseIcon/>
                            </button>

                            {
                                navList.map((item, index) => (
                                    <motion.div
                                        className={"relative"}
                                        key={item.path}
                                        initial={{opacity: 0, scale: 0.7, left: 50}}
                                        whileInView={{opacity: 1, scale: 1, left: 0}}
                                        viewport={{once: true}}
                                        transition={{ease: "easeOut", duration: 0.6, delay: 0.2 + index / 5}}
                                    >
                                        <Link
                                            onClick={() => setIsOpen(false)}
                                            href={item.path}
                                            key={item.path}>{item.label}
                                        </Link>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>,
                    document.body
                )
            }
        </>
    )
}

export default NavbarModal;