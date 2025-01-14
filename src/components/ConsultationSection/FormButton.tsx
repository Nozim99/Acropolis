"use client"

import {sendMessage} from "@/utils/telegram";
import {useState} from "react";

const FormButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = () => {
        setIsLoading(true)

        const nameInput = document.getElementById("name") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const companyInput = document.getElementById("company") as HTMLInputElement;

        sendMessage({
            name: nameInput.value,
            email: emailInput.value,
            company: companyInput.value,
        })
            .then(() => {
                setIsLoading(true);
            })
            .finally(() => {
                setTimeout(() => setIsLoading(false), 1000)
            })

        nameInput.value = "";
        emailInput.value = "";
        companyInput.value = "";

    }

    return (
        <button
            disabled={isLoading}
            onClick={onSubmit}
            type={"button"}
            className={"bg-white py-[8px] mt-[20px] px-[54px] rounded-[24px] font-semibold text-[var(--darkBlue)] self-start hover:bg-white/80 transition-all mx-auto lg:text-lg lg:py-[10px]"
            }>
            Отправить
        </button>
    )
}

export default FormButton;