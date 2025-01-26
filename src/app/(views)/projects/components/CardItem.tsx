'use client'

import {motion} from 'framer-motion'
import Image from "next/image";
import {createPortal} from "react-dom";
import {useState} from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";


interface IProps {
    image: string;
    name: string;
    description: string;
    personImage: string;
    fullName: string;
    position: string;
    url: string;
}


const CardItem = ({image, name, description, personImage, fullName, position, url}: IProps) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className={"mx-auto"}>
                <motion.div
                    className={"w-[290px] h-[170px] rounded-[10px] bg-[#D9D9D9] overflow-hidden sm:w-[275px] sm:h-[160px] md:w-[320px] md:h-[195px] lg:w-[420px] lg:h-[250px] xl:w-[474px] xl:h-[278px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <Image src={image} alt={name} width={474} height={278}
                           className={"object-center object-cover w-full h-full"}/>
                </motion.div>
                <motion.div
                    className={"flex justify-between px-[4px] py-[8px] font-bold sm:text-sm md:text-base lg:text-lg lg:px-[10px] xl:px-[12px] lg:py-[13px] xl:py-[17px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <span>{name}</span>
                    <Link target={"_blank"} href={url}>
                        {t("description")}
                    </Link>
                </motion.div>
            </div>
            {
                isOpen &&
                createPortal(
                    <>
                        <div
                            className={"description_modal fixed w-[700px] min-h-[300px] bg-white left-1/2 -translate-x-1/2 z-30 top-1/2 -translate-y-1/2 rounded-[20px] text-black px-[20px] pb-[20px] pt-[60px]"}>
                            <button onClick={() => setIsOpen(false)}
                                    className={"absolute top-[10px] right-[20px] text-[30px] font-bold"}>X
                            </button>
                            <div className={"flex gap-x-[20px] items-center"}>
                                <Image
                                    className={"w-[110px] h-[110px] rounded-full object-center object-cover mb-[20px]"}
                                    src={personImage} alt={fullName} width={130} height={130}/>
                                <div className={"font-semibold text-2xl"}>
                                    <h4>
                                        {fullName}
                                    </h4>
                                    <h4 className={"opacity-[0.7] text-xl"}>
                                        {position}
                                    </h4>
                                </div>
                            </div>
                            <p className={"font-medium text-2xl"}>
                                {description}
                            </p>
                        </div>
                        <div onClick={() => setIsOpen(false)}
                             className={"fixed description_modal_bg inset-0 backdrop-blur-[1px] bg-black/30 z-20"}></div>
                    </>,
                    document.body
                )}
        </>
    )
}

export default CardItem;