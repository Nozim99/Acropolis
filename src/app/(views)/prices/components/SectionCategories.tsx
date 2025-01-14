import Image from "next/image";
import MnFAQItem from "./MnFAQItem"
import {MiniOrnament} from "@/components/Icons";


const SectionCategories = () => {
    const pricesList = [
        {
            title: "Консалтинг, аудит ИБ/ИТ (обследование)",
            description: "Предоставляем профессиональные услуги по консалтингу и аудиту в сфере информационной безопасности и IT. Наши эксперты проводят детальное обследование, анализ текущих систем и предлагают рекомендации для повышения уровня безопасности и эффективности вашей IT-инфраструктуры."
        },
        {
            title: "Проектирование",
            description: "Мы разрабатываем индивидуальные проектные решения, соответствующие вашим бизнес-целям и требованиям. В процессе проектирования учитываются современные технологии и лучшие практики, чтобы создать надёжную IT-инфраструктуру, адаптированную к вашим задачам."
        },
        {
            title: "Пусконаладка",
            description: "Наши услуги включают комплексные работы по настройке, тестированию и запуску IT-систем. Мы обеспечиваем корректную интеграцию оборудования и программного обеспечения, чтобы гарантировать стабильность и бесперебойную работу системы."
        },
        {
            title: "Сервисная поддержка",
            description: "Оказываем профессиональную техническую поддержку и обслуживание ваших IT-систем. Наши специалисты обеспечивают оперативное решение возникающих проблем, регулярное обновление систем и их стабильную работу для достижения ваших бизнес-целей."
        }
    ];


    return (
        <section className={"bg-[var(--darkBlue)] lg:bg-white relative "}>
            <div className={"absolute top-0 bottom-0 left-0 w-[45%] prices_categories_bg hidden lg:block"}></div>
            <div
                className={"mContainer relative flex justify-center gap-x-[25px] pt-[30px] sm:pt-[35px] md:pt-[43px] pb-[20px]"}>

                <div className={"flex-col absolute top-full gap-y-[4px] -right-[90px] hidden lg:flex"}>
                    {Array(15).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>


                <div className={"hidden lg:flex justify-end flex-1 items-end"}>
                    <Image
                        className={"bg-[var(--darkBlue)] rounded-full mr-[120px]"}
                        src={"/assets/prices-categories.png"}
                        alt={"categories image"}
                        width={455}
                        height={455}
                    />
                </div>

                <div className={"flex-1"}>
                    <h2 className={"title text-center lg:text-start lg:text-[var(--darkBlue)] mb-[45px]"}>
                        УСЛУГИ
                    </h2>
                    <div className={"flex flex-col gap-[8px]"}>
                        {pricesList.map((item, index) => (
                            <MnFAQItem
                                key={index}
                                itemNumber={"0" + (index + 1)}
                                isDark={index % 2 === 1}
                                title={item.title}
                                description={item.description}
                                zIndex={11 + pricesList.length - index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCategories;