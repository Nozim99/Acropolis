'use client'

import {motion} from 'framer-motion';
import Image from "next/image"
import Title from "@/components/Title";
import {MiniOrnament} from "@/components/Icons";
import {useTranslations} from 'next-intl';

const MissionSection = () => {
    const t = useTranslations("Home")

    return (
        <section className={"overflow-hidden"}>
            <div className="mContainer pt-[57px] pb-[30px] relative md:mb-[40px] lg:mb-[80px] xl:mb-[99px]">
                <motion.div
                    className={"absolute bottom-0 right-0 hidden lg:block lg:w-[490px] lg:h-auto xl:w-[550px]"}
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 0.7}}
                >
                    <Image
                        className={"absolute bottom-0 right-0 hidden lg:block lg:w-[490px] lg:h-auto xl:w-[550px]"}
                        src={"/assets/arrows-up.png"}
                        width={718}
                        height={631}
                        alt={"arrows image"}
                    />
                </motion.div>
                <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] -left-[80px]"}>
                    {Array(20).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <div className={"lg:grid lg:grid-cols-2 lg:gap-x-[25px] xl:gap-x-[34px]"}>
                    <div className={"lg:hidden"}>
                        <Title title={t("company_mission")}/>
                    </div>
                    <motion.div
                        className="h-[200px] w-[300px] mx-auto flex justify-center sm:w-[320px] sm:h-[210] lg:h-[400px] lg:w-full xl:h-[435px] items-center"
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {/*<Image src={"/assets/3-people.png"} width={622} height={435} alt={"image"}/>*/}
                        <Image className={"object-cover w-full object-center"} src={"/assets/about-us-image.jpg"} width={622} height={435} alt={"image"}/>
                    </motion.div>
                    <div>
                        <div className={"hidden lg:block lg:mt-[15px]"}>
                            <Title title={t("company_mission")}/>
                        </div>
                        <motion.p
                            className={"text-sm mt-[10px] sm:text-base sm:mt-[20px] md:text-lg lg:text-xl xl:text-2xl"}
                            initial={{opacity: 0, scale: 0.7}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}
                        >
                            {t("company_mission_desc")}
                        </motion.p>
                    </div>
                </div>
                <div className={"mt-[40px] lg:w-1/2 lg:mt-[70px]"}>
                    <Title title={t("history_company")}/>
                    <motion.p
                        className={"text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"}
                        initial={{opacity: 0, scale: 0.7}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.7}}
                    >
                        {t("history_company_desc")}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default MissionSection;
