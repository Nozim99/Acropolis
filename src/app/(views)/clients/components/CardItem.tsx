'use client'

import Image from "next/image";
import {createPortal} from "react-dom";
import {useState} from "react";


interface IProps {
    image: string;
    name: string;
    description: string;
    personImage: string;
    fullName: string;
    position: string;
}


const CardItem = ({image, name, description, personImage, fullName, position}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div className={"mx-auto"}>
                <div className={"w-[474px] h-[278px] rounded-[10px] bg-[#D9D9D9] overflow-hidden"}>
                    <Image src={image} alt={name} width={474} height={278}
                           className={"object-center object-cover w-full h-full"}/>
                </div>
                <div className={"flex justify-between px-[12px] py-[17px] font-bold text-xl"}>
                    <span>{name}</span>
                    <button onClick={() => setIsOpen(true)}>Описание</button>
                </div>
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