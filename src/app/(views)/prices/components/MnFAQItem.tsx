'use client'

import {useEffect, useRef, useState} from "react";
import {Anonymous_Pro} from "next/font/google";


interface IProps {
    isDark: boolean,
    itemNumber: number | string,
    title: string,
    description: string,
    zIndex: number,
}

const anonymousPro = Anonymous_Pro({
    subsets: ["latin"],
    weight: "700"
})


const MnFAQItem = ({isDark, itemNumber, title, description, zIndex}: IProps) => {
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
            <button
                onClick={() => setIsOpen(true)}
                className={`${isOpen ? "rounded-t-[10px]" : "rounded-[10px]"} ${isDark ? "bg-[var(--darkBlue)] border-[#D8A227]" : "bg-[#D8A227] border-[var(--darkBlue)]"} border-[3px] transition-all text-start font-medium text-2xl px-[13px] py-[4px] w-full h-full min-h-[111px] flex items-center gap-x-[20px]`}>
                <span
                    className={`${anonymousPro.className} ${isDark ? "text-[#D8A227]" : "text-[var(--darkBlue)]"} font-bold text-6xl`}>
                    {itemNumber}
                </span>
                <span className={"text-2xl font-medium"}>
                    {title}
                </span>
            </button>
            <div className={`${isOpen ? "block" : "hidden"} absolute inset-0 cursor-pointer`}></div>
            <div
                style={{zIndex}}
                className={`${isOpen ? "max-h-[340px]" : "max-h-0"} ${isDark ? "bg-[var(--darkBlue)]" : "bg-[#D8A227]"} transition-all duration-[400ms] absolute w-full left-0 rounded-b-[10px] overflow-hidden`}
            >
                <p ref={itemRef}
                   className={`${isDark ? "border-[#D8A227]" : "border-[var(--darkBlue)]"} text-xl top-full p-[14px] border-x-[3px] border-b-[3px] overflow-hidden`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MnFAQItem