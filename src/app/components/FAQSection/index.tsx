"use client"

import {useState} from "react";

interface FAQItem {
    title: string;
    description: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            title: "Чем занимается ваша компания?",
            description: "Наша компания занимается разработкой веб-приложений, мобильных приложений и предоставляет IT-консультации.",
        },
        {
            title: "Какие технологии вы чаще всего используете?",
            description: "Мы активно используем современные технологии, такие как React, Next.js, TailwindCSS, TypeScript, и другие.",
        },
        {
            title: "Есть ли у вас вакансии для новичков?",
            description: "Да, у нас есть программы для стажеров и начинающих специалистов. Мы помогаем им развиваться и набираться опыта.",
        },
        {
            title: "Как можно связаться с вашей командой?",
            description: "Вы можете связаться с нами через контактную форму на сайте или написать нам на email: support@company.com.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={"bg-white text-black overflow-hidden"}>
            <div className={"mContainer relative"}>

                <div className="max-w-3xl mx-auto p-4 pt-[50px] pb-[70px]">
                    <h2
                        // className="mb-[33px] font-bold text-[70px] text-[#004040] text-center"
                        className="mb-[33px] font-bold text-[30px] text-[#004040] text-center sm:text-[35px] md:text-[40px] lg:text-[60px] xl:text-[70px]"
                    >
                        FAQ
                    </h2>
                    <div
                        className="space-y-4 text-3xl border-t border-black pt-[10px] sm:w-[550px] md:w-[600px] lg:w-[800px] xl:w-[900px] sm:mx-auto"
                    >
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-black pb-[10px]"
                            >
                                <button
                                    className="w-full text-left text-xl hover:text-gray-900 focus:outline-none lg:text-2xl xl:text-3xl"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {index + 1}. {item.title}
                                </button>
                                <div
                                    className={`mt-2 overflow-hidden transition-max-height duration-300 ${
                                        activeIndex === index ? "max-h-40" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
