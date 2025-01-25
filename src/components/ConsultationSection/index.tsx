'use client'

import {motion} from 'framer-motion';
import Title from "@/components/Title";
import {ChartIcon, PersonIcon, SuccessSettingIcon} from "@/components/Icons";
import FormButton from "./FormButton"

const Index = () => {
    const ourTargetsList = [
        {
            title: "Качество нашей сети талантов",
            icon: <PersonIcon/>,
        },
        {
            title: "Использование и внедрение нашего программного обеспечения",
            icon: <SuccessSettingIcon/>,
        },
        {
            title: "Как мы помогаем продвигать инновации",
            icon: <ChartIcon/>,
        },
    ]

    return (
        <section className={"overflow-hidden"}>
            <div
                className={"mContainer pt-[20px] pb-[30px] relative sm:pt-[30px] sm:pb-[40px] md:pt-[60px] md:pb-[50px] lg:pt-[100px] lg:pb-[80px] xl:pt-[116px] xl:pb-[96px]"}
            >


                <Title title={"Обратная связь"}/>
                <div
                    className={"grid grid-cols-1 gap-[20px] lg:grid-cols-2"}
                >
                    <div>
                        <ul
                            className={"font-medium text-sm grid gap-[8px] sm:text-lg md:w-[600px] md:mx-auto lg:w-full lg:text-lg lg:font-semibold xl:font-bold"}
                        >
                            {ourTargetsList.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className={"flex items-center gap-x-[22px] relative"}
                                    initial={{opacity: 0, top: 20, scale: 0.7}}
                                    whileInView={{opacity: 1, top: 0, scale: 1}}
                                    viewport={{once: true}}
                                    transition={{ease: "easeOut", duration: 0.8}}
                                >
                                    {item.icon}
                                    <span className={"flex-1"}>{item.title}</span>
                                </motion.li>
                            ))}</ul>
                    </div>
                    {/* FORM */}
                    <form className={"flex flex-col gap-[5px] text-lg font-semibold md:text-xl lg:text-2xl"}>
                        <motion.input
                            placeholder={"Имя "}
                            className={"input relative"}
                            type="text"
                            id={"name"}
                            initial={{opacity: 0, left: 50, scale: 0.7}}
                            whileInView={{opacity: 1, left: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        />
                        <motion.input
                            placeholder={"E-mail"}
                            className={"input relative"}
                            type="text"
                            id={"email"}
                            initial={{opacity: 0, left: 50, scale: 0.7}}
                            whileInView={{opacity: 1, left: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        />
                        <motion.input
                            placeholder={"Название компании "}
                            className={"input relative"}
                            type="text"
                            id={"company"}
                            initial={{opacity: 0, left: 50, scale: 0.7}}
                            whileInView={{opacity: 1, left: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        />
                        <FormButton/>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Index;