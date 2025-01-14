'use client'

import {useEffect, useRef, useState} from "react";

const MnFAQItem = ({isYellow = true, title, description, index}: {
    isYellow: boolean,
    title: string,
    description: string,
    index?: number,
}) => {
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
                className={`${isOpen ? "rounded-t-[10px]" : "rounded-[10px]"} ${isYellow ? "bg-[#D8A227]" : "bg-[#979797]"} transition-all text-start font-medium text-base px-[13px] py-[2px] w-full h-full 
                min-h-[60px] sm:text-lg md:text-xl xl:text-2xl lg:py-[4px] lg:min-h-[67px]`}>
                {title}
            </button>
            <div className={`${isOpen ? "block" : "hidden"} absolute inset-0 cursor-pointer`}></div>
            <div
                style={{zIndex: 11 + (index || 0)}}
                className={`${isOpen ? "max-h-[340px]" : "max-h-0"} ${isYellow ? "bg-[#D8A227]" : "bg-[#979797]"} transition-all duration-[400ms] absolute w-full left-0 rounded-b-[10px] overflow-hidden`}
            >
                <p ref={itemRef}
                   className={`text-sm sm:text-base md:text-lg xl:text-xl top-full p-[8px] sm:p-[10px] md:p-[14px] border-t-[2px]`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MnFAQItem