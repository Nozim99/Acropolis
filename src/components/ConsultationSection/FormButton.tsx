"use client"

import {motion} from "framer-motion";
import {sendMessage} from "@/utils/telegram";
import {useState} from "react";
import {useTranslations} from 'next-intl';

const FormButton = () => {
    const t = useTranslations("Home");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setIsLoading(true)

        const nameInput = document.getElementById("name") as HTMLInputElement;
        const phoneInput = document.getElementById("phone") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const companyInput = document.getElementById("company") as HTMLInputElement;
        const descriptionInput = document.getElementById("textarea_description") as HTMLTextAreaElement;

        sendMessage({
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            company: companyInput.value,
            description: descriptionInput.value
        })
            .then(() => {
                setIsLoading(true);
            })
            .finally(() => {
                setTimeout(() => setIsLoading(false), 1000)
            })

        nameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        companyInput.value = "";
        descriptionInput.value = "";

    }

    return (
        <motion.button
            disabled={isLoading}
            onClick={onSubmit}
            type={"button"}
            className={"bg-white py-[8px] mt-[20px] px-[54px] rounded-[24px] font-semibold text-[var(--darkBlue)] self-start hover:bg-white/80 transition-all mx-auto lg:text-lg lg:py-[10px]"
            }
            initial={{opacity: 0, left: 50, scale: 0.7}}
            whileInView={{opacity: 1, left: 0, scale: 1}}
            viewport={{once: true}}
            transition={{ease: "easeOut", duration: 0.8}}

        >
            {t("send")}
        </motion.button>
    )
}

export default FormButton;