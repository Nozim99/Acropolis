'use client'

import {motion} from 'framer-motion';
import {RuIcon, UKIcon, UzIcon} from "@/components/Icons";
import {useState} from "react";
import {createPortal} from "react-dom";
import {useTranslation} from "react-i18next";
import "@/i18n"


const languages = [
    {title: "RU", icon: <RuIcon/>},
    {title: "UZ", icon: <UzIcon/>},
    {title: "EN", icon: <UKIcon/>},
]


const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const current_lng = i18n.language
    // const current_lng = "uz"
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(current_lng?.toUpperCase() || languages[0].title);


    const changeHandler = (value: string): void => {
        i18n.changeLanguage(value.toLowerCase());
        setSelectedLanguage(value)
        setIsOpen(false)
    }


    return (
        <>
            <div className={"relative"}>
                <motion.button
                    onClick={() => setIsOpen(true)} className={"flex items-center gap-x-[8px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{ease: "easeOut", duration: 0.6, delay: 2}}
                >
                    <span className={"hidden lg:inline-block"}>{selectedLanguage}</span>
                    <span className={"scale-[0.85] lg:scale-100"}>{languages.find(item => item.title === selectedLanguage)?.icon}</span>
                </motion.button>

                <ul
                    className={`${isOpen ? "max-h-[150px] border shadow-2xl" : "max-h-0 pointer-events-none"} w-[105px] lg:w-[120px] overflow-hidden transition-all duration-300 absolute bg-white z-20 right-0 top-[35px]`}>{languages.map(item => (
                    <li key={item.title}>
                        <button
                            onClick={() => changeHandler(item.title)}
                            className={"flex items-center gap-[8px] py-[5px] hover:bg-neutral-200 transition-colors text-black w-full justify-center"}>
                            {item.title} {item.icon}
                        </button>
                    </li>
                ))}</ul>
            </div>
            {
                isOpen &&
                createPortal(<div onClick={() => setIsOpen(false)}
                                  className={"fixed inset-0 z-10"}></div>, document.body)
            }
        </>
    )
}

export default LanguageSelector;