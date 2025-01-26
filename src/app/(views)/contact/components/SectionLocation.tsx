'use client'

import {motion} from 'framer-motion';
import {LocationIcon, MiniOrnament, PhoneIcon} from "@/components/Icons";
import {useTranslation} from "react-i18next";

const SectionLocation = () => {
    const {t} = useTranslation();

    return (
        <section className={"bg-[var(--darkBlue) text-[#D8A227]"}>
            <div
                className={"mContainer grid grid-cols-1 gap-x-[40px] pt-[63px] pb-[33px] relative lg:grid-cols-2 xl:pt-[63px] xl:pb-[33px]"}>
                <div className={"flex-col absolute top-0 gap-y-[4px] -right-[90px] hidden lg:flex"}>
                    {Array(15).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <motion.div
                    className={"h-[200px] relative rounded-[4px] sm:rounded-[6px] md:rounded-[8px] lg:rounded-[10px] bg-white overflow-hidden min-[425px]:h-[250px] sm:h-[280px] md:h-[320px] xl:h-[407px]"}
                    initial={{opacity: 0, scale: 0.8, right: 150}}
                    whileInView={{opacity: 1, scale: 1, right: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2117.451650038582!2d69.29819716426648!3d41.36259364267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736683817641!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </motion.div>
                <div className={"mt-[30px] lg:mt-0"}>
                    <motion.h4
                        className={"font-bold text-xl mb-[10px] sm:text-2xl sm:mb-[14px] md:text-3xl xl:mb-[24px]"}
                        initial={{opacity: 0, scale: 0.8, left: 50}}
                        whileInView={{opacity: 1, scale: 1, left: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, ease: "easeOut"}}
                    >
                        {t("our_address")}
                    </motion.h4>
                    <div
                        className={"flex items-center font-bold text-sm gap-x-[8px] sm:text-base md:text-lg mb-[30px] lg:mb-[60px] xl:gap-x-[20px] xl:mb-[70px] xl:text-2xl"}>
                        <motion.div
                            className={"relative"}
                            initial={{opacity: 0, scale: 0.8, top: 60}}
                            whileInView={{opacity: 1, scale: 1, top: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <LocationIcon
                                className={"w-[45px] h-auto sm:w-[47px] md:w-[55px] xl:w-[65px] xl:h-[62px]"}/>
                        </motion.div>
                        <motion.span
                            className={"flex-1 xl:leading-9"}
                            initial={{opacity: 0, scale: 0.8, left: 200}}
                            whileInView={{opacity: 1, scale: 1, left: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7, ease: "easeOut", delay: 0.7}}
                        >
                            {t("current_address")}
                        </motion.span>
                    </div>
                    <motion.h4
                        className={"font-bold text-xl mb-[10px] sm:text-2xl sm:mb-[14px] md:text-3xl"}
                        initial={{opacity: 0, scale: 0.8, left: 50}}
                        whileInView={{opacity: 1, scale: 1, left: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, ease: "easeOut"}}
                    >
                        {t("phone_number")}
                    </motion.h4>
                    <div
                        className={"flex items-center font-bold text-sm gap-x-[10px] sm:text-base md:text-lg xl:gap-x-[20px] xl:text-2xl"}>
                        <motion.div
                            className={"relative"}
                            initial={{opacity: 0, scale: 0.8, top: 60}}
                            whileInView={{opacity: 1, scale: 1, top: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                        >
                            <PhoneIcon
                                className={"w-[40px] h-auto sm:w-[42px] md:w-[46px] lg:w-[51px] xl:w-[51px] xl:h-[51px]"}
                                width={"51"}
                                height={"51"}
                            />
                        </motion.div>
                        <div className={"grid"}>
                            <motion.span
                                className={"mb-[4px] relative"}
                                initial={{opacity: 0, scale: 0.8, left: 100}}
                                whileInView={{opacity: 1, scale: 1, left: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.7, ease: "easeOut", delay: 0.7}}
                            >
                                +998 93 804 84 14
                            </motion.span>
                            <motion.span
                                className={"relative"}
                                initial={{opacity: 0, scale: 0.8, left: 100}}
                                whileInView={{opacity: 1, scale: 1, left: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.7, ease: "easeOut", delay: 0.9}}
                            >
                                +998 90 092 18 28
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLocation;