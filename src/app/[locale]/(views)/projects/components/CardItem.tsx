'use client'

import {motion} from 'framer-motion'
import Image from "next/image";
import {createPortal} from "react-dom";
import {useState} from "react";
import {useTranslations} from 'next-intl';
import {CloseIcon} from "@/components/Icons";


interface IProps {
    image: string;
    title: string;
    description: string;
}


const CardItem = ({image, title, description}: IProps) => {
    const t = useTranslations("Home");
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className={"mx-auto"}>
                <motion.div
                    className={"w-[290px] h-[170px] rounded-[10px]  overflow-hidden sm:w-[275px] sm:h-[160px] md:w-[320px] md:h-[195px] lg:w-[420px] lg:h-[250px] xl:w-[474px] xl:h-[278px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <Image src={image} alt={title} width={474} height={278}
                           className={"object-center object-cover w-full h-full border border-black/10 overflow-hidden"}/>
                </motion.div>
                <motion.div
                    className={"flex justify-between px-[4px] py-[8px] font-bold sm:text-sm md:text-base lg:text-lg lg:px-[10px] xl:px-[12px] lg:py-[13px] xl:py-[17px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <span>{title}</span>
                    <button onClick={() => setIsOpen(true)}>
                        {t("description")}
                    </button>
                </motion.div>
            </div>
            {
                isOpen &&
                createPortal(
                    <>
                        <div
                            className={`description_modal fixed w-[90%] min-h-[300px] lg:min-h-[350px] max-h-[400px] lg:max-h-[600px] overflow-y-auto bg-white left-1/2 -translate-x-1/2 z-30 top-1/2 -translate-y-1/2 rounded-[8px] text-black px-[20px] pb-[20px] pt-[20px] md:w-[700px] lg:w-[800px]`}>
                            <div className={"flex items-start justify-between mb-[14px]"}>
                                <h2 className={"flex gap-x-[20px] items-center font-semibold sm:text-lg md:text-xl lg:text-2xl"}>
                                    {title}
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className={""}
                                >
                                    <CloseIcon/>
                                </button>
                            </div>
                            <div className={"text-sm gap-[2px] sm:text-base lg:text-lg"}>
                                {
                                    description.split('\n').map((p_item, p_index) => (
                                        <p key={p_index}>
                                            {p_item}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div onClick={() => setIsOpen(false)}
                             className={"fixed description_modal_bg inset-0 backdrop-blur-[3px] bg-black/50 z-20"}></div>
                    </>,
                    document.body
                )}
        </>
    )
}

export default CardItem;