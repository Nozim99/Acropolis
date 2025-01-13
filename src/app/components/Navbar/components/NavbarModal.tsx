'use client'

import {createPortal} from "react-dom";
import {CloseIcon, MenuIcon} from "@/components/Icons";
import {navList} from "@/app/utils/navList";
import Link from "next/link";
import {useState} from "react";


const NavbarModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <MenuIcon/>
            </button>

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
                                navList.map((item) => (
                                    <Link onClick={() => setIsOpen(false)} href={item.path}
                                          key={item.path}>{item.label}</Link>
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