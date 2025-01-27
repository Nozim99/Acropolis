'use client'

import {motion} from 'framer-motion'
import Image from "next/image";
import {useTranslations} from 'next-intl';

const NotAllSection = () => {
    const t = useTranslations("Home")

    const cardList = [
        {
            title: t("it_is_not_all_card_1_title"),
            image: "/assets/card-handshake.png",
            width: 370,
            height: 193,
            description: t("it_is_not_all_card_1_desc"),
        },
        {
            title: t("it_is_not_all_card_2_title"),
            image: "/assets/card-chart.png",
            width: 139,
            height: 100,
            description: t("it_is_not_all_card_2_desc"),
        },
        {
            title: t("it_is_not_all_card_3_title"),
            image: "/assets/card-it.png",
            width: 218,
            height: 263,
            description: t("it_is_not_all_card_3_desc"),
        },
        {
            title: t("it_is_not_all_card_4_title"),
            image: "/assets/card-hand-plant.png",
            width: 212,
            height: 213,
            description: t("it_is_not_all_card_4_desc"),
        },
    ]

    return (
        <section>
            <div className={"mContainer pt-[23px] pb-[20px] text-[#D8A227] sm:pb-[25px] md:pb-[30px] lg:pb-[44px]"}>
                <motion.h2
                    className={"title mb-[20px] text-center sm:mb-[23px] md:mb-[28px] lg:mb-[32px] relative"}
                    initial={{opacity: 0, scale: 0.7, left: 100}}
                    whileInView={{opacity: 1, scale: 1, left: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {t("it_is_not_all")}
                </motion.h2>
                <motion.p
                    className={"text-sm mb-[30px] text-white sm:text-base md:text-lg lg:font-light lg:text-xl xl:text-2xl sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    {t("it_is_not_all_desc")}
                </motion.p>
                <ul className={"grid grid-cols-1 gap-y-[24px] font-medium text-lg text-white sm:grid-cols-2 md:text-2xl lg:gap-y-[32px] lg:text-3xl xl:text-4xl"}>
                    {cardList.map((item, index) => (
                        <motion.li
                            className={`
                    ${index % 2 === 0 ? "bg-[#D8A227]" : "bg-[#979797]"} 
                    ${index === 2 ? "order-1" : ""}
                    ${(index === 0 || index === 3) ? "place-self-end" : ""}
                    card border relative p-[16px] w-[270px] h-[140px] flex items-end overflow-hidden mx-auto md:w-[336px] md:h-[190px] lg:w-[450px] lg:h-[225px] xl:w-[590px] xl:h-[267px]`}
                            key={item.title}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            {index === 2
                                ? <div
                                    className={"img bg-[#004040] rounded-full absolute top-[18px] right-[18px] w-[150px] h-[150px]"}>
                                    <Image className={`absolute top-[14px] right-[8px]`} src={item.image}
                                           alt={item.title} width={item.width} height={item.height}/></div>
                                : <Image className={`img absolute top-0 right-0`} src={item.image} alt={item.title}
                                         width={item.width} height={item.height}/>
                            }
                            <p className={"w-5/6 relative top-0 card_title"}>{item.title}</p>
                            {/*<p className={"text-2xl card_description absolute top-[50px] left-[50px] opacity-0 scale-[0.3] w-full h-full"}>*/}
                            <p className={"text-xs md:text-base lg:text-xl xl:text-2xl card_description absolute top-[50px] left-[50px] opacity-0 scale-[0.3] w-full h-full"}>
                                {item.description}
                            </p>
                        </motion.li>
                    ))}</ul>
            </div>
        </section>
    )
}

export default NotAllSection