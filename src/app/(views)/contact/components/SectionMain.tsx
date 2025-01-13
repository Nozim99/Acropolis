import Image from "next/image";

const SectionMain = () => {
    return (
        <section className={"bg-white w-full overflow-hidden relative"}>
            <div className={"container mx-auto pt-[100px] pb-[160px] items-center relative"}>
                <Image className={"absolute right-[230px] top-0"} src={"/assets/location.png"} alt={"Image"} width={397} height={381} />

                <h1 className={"text-[var(--orange)] font-bold text-[100px] leading-[7rem] w-5/6"}>
                    Контакты
                </h1>
                <div className={"w-1/3 mt-[30px] ml-[20px]"}>
                    <div className={"w-[60px] h-[5px] bg-gradient-to-r from-[#D09714] to-[#6A4D0A] mb-[24px]"}></div>
                    <p className={"font-light text-2xl text-[var(--darkBlue)]"}>
                        Имея более чем 10-летний опыт работы в ИТ, мы умеем решать актуальные задачи наших клиентов
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SectionMain;