'use client'

import {motion} from "framer-motion"
import {useEffect, useRef, useState} from "react";
import {Anonymous_Pro} from "next/font/google";


interface IProps {
    isDark: boolean,
    itemNumber: number | string,
    title: string,
    description: string,
    zIndex: number,
    index: number,
}

const anonymousPro = Anonymous_Pro({
    subsets: ["latin"],
    weight: "700"
})


const MnFAQItem = ({isDark, itemNumber, title, description, zIndex, index}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const itemRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (itemRef.current && !itemRef.current.contains(event.target as Node)) setIsOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])


    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`${isOpen ? "rounded-t-[10px]" : "rounded-[10px]"} ${isDark ? "bg-[var(--darkBlue)] border-[#D8A227]" : "bg-[#D8A227] border-[var(--darkBlue)]"} border-[2px] md:border-[3px] transition-all text-start
                font-medium text-2xl px-[13px] py-[4px] w-full h-full min-h-[85px] flex items-center gap-x-[10px] sm:min-h-[90px] md:gap-x-[20px] lg:min-h-[111px] relative`}
                initial={{opacity: 0, scale: 0.7, left: 30}}
                whileInView={{opacity: 1, scale: 1, left: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7, ease: "linear", delay: 0.1 + index / 5}}
            >
                <span
                    className={`${anonymousPro.className} ${isDark ? "text-[#D8A227]" : "text-[var(--darkBlue)]"} font-bold text-4xl sm:text-5xl lg:text-6xl`}>
                    {itemNumber}
                </span>
                <span className={"text-lg font-medium sm:text-2xl"}>
                    {title}
                </span>
            </motion.button>
            <div className={`${isOpen ? "block" : "hidden"} absolute inset-0 cursor-pointer`}></div>
            <div
                style={{zIndex}}
                className={`${isOpen ? "max-h-[340px]" : "max-h-0"} ${isDark ? "bg-[var(--darkBlue)]" : "bg-[#D8A227]"} rounded-b-[10px] transition-all duration-[400ms] absolute w-full left-0 overflow-hidden`}
            >
                <p ref={itemRef}
                   className={`${isDark ? "border-[#D8A227]" : "border-[var(--darkBlue)]"} text-sm top-full p-[8px] border-x-[3px] border-b-[3px] rounded-b-[10px] sm:text-base sm:p-[10px] md:p-[14px] md:text-lg lg:text-xl`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MnFAQItem