import Image from "next/image";
import Title from "@/components/Title";
import {AboutCompanyIcon, MiniOrnament} from "@/components/Icons";

const AboutSection = () => {
    return (
        <section className={"overflow-hidden"}>
            {/*<div className={"pt-[100px] overflow-hidden container mx-auto relative pb-[60px] px-[150px]"}>*/}
            <div className={"pt-[50px] mContainer mx-auto relative pb-[60px] lg:pt-[80px] lg:pb-[50px] xl:pt-[100px] xl:pb-[60px] xl:px-[10px]"}>
                {/*<div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] left-0"}>*/}
                <div className={"flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] -left-[20px] hidden lg:flex"}>
                    {Array(11).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                {/*<div className="grid grid-cols-2 relative">*/}
                <div className="grid grid-cols-1 relative lg:grid-cols-2">
                    <div className={"grid justify-center sm:mb-[10px]"}>
                        <Title title={"О КОМПАНИИ"}/>
                        <div className={"relative"}>
                            <Image
                                className={"mx-auto"}
                                width={410}
                                height={435}
                                src={"/assets/about-company-image.png"}
                                alt={"members of company"}
                            />
                        </div>
                    </div>
                    {/*<div className={"flex flex-col justify-between font-light text-2xl gap-y-[20px]"}>*/}
                    <div className={"flex flex-col justify-between text-sm gap-y-[10px] mt-[15px] sm:text-base md:text-lg xl:text-2xl xl:gap-y-[20px]"}>
                        <p>Наша команда состоит из высококвалифицированных специалистов и обладает богатым опытом работы
                            в ведущих
                            международных ИТ-компаниях, крупных банках и телекоммуникационных операторах.</p>
                        <p>Мы специализируемся на внедрении комплексных решений для автоматизации бизнес-процессов,
                            создании
                            надежной,
                            отказоустойчивой и масштабируемой ИТ-инфраструктуры, обеспечении ее безопасности и повышения
                            эффективности
                            работы компаний.</p>
                        <p>Независимо от сложности задачи, наша команда всегда готова предложить инновационные,
                            высокотехнологичные
                            решения, соответствующие вашим потребностям. От аудита и проектирования до внедрения,
                            обучения персонала и
                            технической поддержки – мы сопровождаем клиента на всех этапах проекта.</p>
                        <button
                            // className={"relative py-[10px] w-[360px] block mt-[10px] bg-[var(--orange)] hover:bg-yellow-500 rounded-full font-semibold text-lg transition-all"}>
                            className={"relative py-[6px] block mx-auto px-[30px] mt-[10px] bg-[var(--orange)] hover:bg-yellow-500 rounded-full font-semibold transition-all sm:px-[50px] sm:py-[10px] sm:text-xl xl:py-[10px] xl:w-[360px] xl:mt-[10px] xl:mx-0"}>
                            Узнать подробнее
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;