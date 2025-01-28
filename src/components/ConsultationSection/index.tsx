'use client'

import {motion} from 'framer-motion';
import Title from "@/components/Title";
import {ChartIcon, PersonIcon, SuccessSettingIcon} from "@/components/Icons";
import FormButton from "./FormButton"
import {useTranslations} from 'next-intl';


const Index = () => {
    const t = useTranslations("Home");

    const ourTargetsList = [
        {
            title: t("feedback_1"),
            icon: <PersonIcon/>,
        },
        {
            title: t("feedback_2"),
            icon: <SuccessSettingIcon/>,
        },
        {
            title: t("feedback_3"),
            icon: <ChartIcon/>,
        },
    ]

    return (
        <section className={"overflow-hidden"}>
            <div
                className={`mContainer pt-[20px] pb-[30px] relative sm:pt-[30px] sm:pb-[40px] md:pt-[60px] md:pb-[50px] lg:pt-[100px] lg:pb-[80px] xl:pt-[116px] xl:pb-[96px]
                md:w-[600px] lg:w-[800px]`}
            >


                <Title title={t("feedback")}/>
                <div
                    // className={"grid grid-cols-1 gap-[20px] lg:grid-cols-2"}
                    className={""}
                >
                    <div className={"hidden"}>
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
                            placeholder={t("name")}
                            className={"input relative"}
                            type="text"
                            id={"name"}
                            initial={{opacity: 0, left: 50, scale: 0.7}}
                            whileInView={{opacity: 1, left: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        />
                        <motion.input
                            placeholder={t("mail")}
                            className={"input relative"}
                            type="text"
                            id={"email"}
                            initial={{opacity: 0, left: 50, scale: 0.7}}
                            whileInView={{opacity: 1, left: 0, scale: 1}}
                            viewport={{once: true}}
                            transition={{ease: "easeOut", duration: 0.8}}
                        />
                        <motion.input
                            placeholder={t("company_name")}
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