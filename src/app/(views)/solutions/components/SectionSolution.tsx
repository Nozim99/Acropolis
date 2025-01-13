import Title from "@/components/Title";
import Image from "next/image";
import MnFAQItem from "./MnFAQItem";
import {MiniOrnament} from "@/components/Icons";

export const SectionSolution = () => {
    const statisticList = [
        {
            img: "/assets/laptops-setting.png",
            title: "ИТ-инфраструктура",
            width: 118,
            height: 113,
        },
        {
            img: "/assets/pc-setting.png",
            title: "Системное ПО",
            width: 123,
            height: 115,
        },
        {
            img: "/assets/world-security.png",
            title: "Информационная безопасность",
            width: 122,
            height: 122,
        },
    ]

    const solutionsList = [
        {
            title: "Серверная инфраструктура и операционые системы",
            description: "Мы предоставляем услуги по проектированию, настройке и обслуживанию серверной инфраструктуры и операционных систем, чтобы обеспечить стабильность и высокую производительность IT-среды вашего бизнеса.",
            isYellow: true,
        },
        {
            title: "Система управления базами данных",
            description: "Разрабатываем и внедряем системы управления базами данных, которые позволяют безопасно хранить, эффективно обрабатывать и анализировать большие объемы информации, удовлетворяя потребности вашего бизнеса.",
            isYellow: true,
        },
        {
            title: "Сетевая безопасность",
            description: "Обеспечиваем защиту ваших сетей от киберугроз с помощью современных технологий, включая системы обнаружения атак, межсетевые экраны и защиту конфиденциальных данных.",
            isYellow: true,
        },
        {
            title: "Системы хранения данных",
            description: "Предлагаем решения для создания масштабируемых и надежных систем хранения данных, которые обеспечивают быстрый доступ и защиту информации, важной для вашей компании.",
            isYellow: false,
        },
        {
            title: "Операционные системы",
            description: "Осуществляем установку, настройку и поддержку различных операционных систем, чтобы повысить надежность и производительность вашей IT-инфраструктуры.",
            isYellow: false,
        },
        {
            title: "Безопасность пользователей",
            description: "Обеспечиваем комплексные меры для защиты пользователей и их данных, включая контроль доступа, защиту учетных записей и предотвращение несанкционированного использования.",
            isYellow: false,
        },
        {
            title: "Виртуализация / Гиперконвергенция",
            description: "Внедряем решения по виртуализации и гиперконвергенции, которые помогают оптимизировать использование ресурсов и повысить гибкость управления IT-инфраструктурой.",
            isYellow: true,
        },
        {
            title: "ПО RK/DR",
            description: "Предоставляем программное обеспечение для резервного копирования и восстановления данных, чтобы минимизировать риски потери информации и обеспечить их доступность при сбоях.",
            isYellow: true,
        },
        {
            title: "SOC компоненты",
            description: "Предлагаем решения для создания и управления Центрами безопасности (SOC), обеспечивающие мониторинг, анализ и нейтрализацию киберугроз в режиме реального времени.",
            isYellow: true,
        },
        {
            title: "Система резервного копирования",
            description: "Разрабатываем и внедряем системы резервного копирования, которые гарантируют сохранность данных, их восстановление после сбоев и соответствие требованиям безопасности.",
            isYellow: false,
        },
        {
            title: "Сети передачи данных",
            description: "Проектируем и обслуживаем сети передачи данных с высокой пропускной способностью и надежностью, обеспечивая бесперебойное взаимодействие между различными системами и устройствами.",
            isYellow: false,
        },
    ];



    return (
        <section className={"pb-[123px]"}>
            <div className={"pt-[155px] relative mx-auto container"}>
                <div className={"flex flex-col absolute top-0 gap-y-[4px] -left-[90px]"}>
                    {Array(20).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <Title title={"РЕШЕНИЕ"}/>
                <ul className={"grid grid-cols-3 mb-[30px]"}>
                    {statisticList.map((item, index) => (
                        <li key={index} className={"flex items-center gap-[10px] mx-auto"}>
                            <div
                                className={"w-[180px] h-[180px] rounded-full flex justify-center items-center bg-white/10"}>
                                <Image src={item.img} alt={item.title} width={item.width} height={item.height}/>
                            </div>
                            <span className={"font-medium text-2xl"}>{item.title}</span>
                        </li>
                    ))}
                </ul>

                <div className={"grid grid-cols-3 gap-x-[28px] gap-y-[11px]"}>
                    {solutionsList.map((item, index) => (
                        <MnFAQItem
                            key={index}
                            index={11 + statisticList.length - index}
                            {...item}
                            description={item.description}
                        />
                    ))}</div>
            </div>
        </section>
    )
};

export default SectionSolution;