'use client'

import {motion} from 'framer-motion'
import Title from "@/components/Title";
import {TechnologyLampIcon, WorkGroupIcon} from "@/components/Icons";

const WhyUsSection = () => {
    return (
        <section className={"bg-white overflow-hidden"}>
            <div
                className={"mContainer pt-[25px] pb-[30px] relative sm:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px] sm:pb-[50px] md:pb-[70px] lg:pb-[100px] xl:pb-[110px]"}>

                <Title title={"ПОЧЕМУ МЫ?"} className={"text-[var(--darkBlue)]"}/>
                <div
                    className={"text-sm sm:text-base md:text-lg lg:font-light lg:text-xl xl:text-2xl text-[#004040] mb-[40px]"}>
                    <motion.p
                        className={"mb-[30px]"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        У нашей команды глубокое понимание потребностей заказчиков и стремление
                        предоставить им лучшие решения для
                        достижения успеха в их деятельности. Это обеспечивает доверие, эффективность и взаимовыгодное
                        сотрудничество
                        между нашей компанией и клиентами.
                    </motion.p>
                    <motion.p
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        Сотрудничество с нами означает не только получение качественных услуг, но и партнерство с
                        командой
                        профессионалов, полностью посвященных достижению ваших бизнес-целей. Мы готовы идти вместе с
                        вами по пути
                        цифровой трансформации, преодолевая любые препятствия и открывая новые горизонты для вашего
                        успеха.
                    </motion.p>
                </div>
                <div
                    className={"flex flex-col items-center gap-y-[40px] md:flex-row md:justify-center md:gap-x-[40px] md:items-start lg:gap-x-[120px] xl:gap-x-[200px]"}>
                    <div className={"w-[270px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <div
                                className={"w-[140px] h-[140px] rounded-full bg-white flex items-center justify-center"}>
                                <div
                                    className={"w-[100px] h-[100px] rounded-full bg-[#2C6269] flex items-center justify-center text-2xl font-bold"}>100%
                                </div>
                            </div>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            Высокое качество услуг и решений
                        </motion.h4>
                    </div>
                    <div className={"w-[270px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <WorkGroupIcon/>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            Опытные специалисты
                        </motion.h4>
                    </div>
                    <div className={"w-[278px] text-center"}>
                        <motion.div
                            className={"mx-auto w-[180px] h-[180px] mb-[19px] rounded-full bg-[#2C6269] flex items-center justify-center"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            <TechnologyLampIcon/>
                        </motion.div>
                        <motion.h4
                            className={"why_us_title"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            Передовые технологии и инновации
                        </motion.h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection;