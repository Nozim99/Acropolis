import {LocationIcon, MiniOrnament, PhoneIcon} from "@/components/Icons";

const SectionLocation = () => {
    return (
        <section className={"bg-[var(--darkBlue) text-[#D8A227]"}>
            <div className={"container mx-auto grid grid-cols-2 gap-x-[40px] pt-[63px] pb-[33px] relative"}>
                <div className={"flex flex-col absolute top-0 gap-y-[4px] -right-[90px]"}>
                    {Array(15).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <div className={"h-[407px] rounded-[10px] bg-white overflow-hidden"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2117.451650038582!2d69.29819716426648!3d41.36259364267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736683817641!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
                <div>
                    <h4 className={"font-bold text-3xl mb-[24px]"}>
                        Мы находимся по адресу:
                    </h4>
                    <div className={"flex items-center font-bold text-2xl gap-x-[20px] mb-[70px]"}>
                        <LocationIcon/>
                        <span className={"leading-9"}>
                            Республика Узбекистан, г. Ташкент 1-й Проезд Дархан, д. 7, БЦ {'"'}TUT{'"'}
                        </span>
                    </div>
                    <h4 className={"font-bold text-3xl mb-[24px]"}>
                        Номер телефона
                    </h4>
                    <div className={"flex items-center font-bold text-2xl gap-x-[20px]"}>
                        <PhoneIcon width={"51"} height={"51"}/>
                        <div className={"grid"}>
                            <span className={"mb-[8px]"}>+998 93 804 84 14</span>
                            <span>+998 90 092 18 28</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLocation;