import CardItem from "@/app/(views)/clients/components/CardItem";
import {MiniOrnament} from "@/components/Icons";

const SectionClients = () => {
    const clientsList = [
        {
            name: "Tech Innovators",
            image: "/assets/clients/tech-innovators.png",
            personImage: "/assets/clients/lola-shodiyeva.jpg",
            fullName: "Lola Shodiyeva",
            position: "Директор",
            description: "Мы очень довольны сотрудничеством с командой разработчиков Tech Innovators! Их профессионализм и креативность превзошли наши ожидания. Они внимательно выслушали наши потребности и предложили идеальное решение. На каждом этапе проекта коммуникация с ними была легкой и продуктивной. Наш продукт был создан не только вовремя, но и с высоким качеством. Их опыт и инновационный подход произвели на нас большое впечатление. Если вы ищете надежную и квалифицированную команду разработчиков, мы настоятельно рекомендуем обратиться к Tech Innovators!",
        },
        {
            name: "Smart Solutions Co.",
            image: "/assets/clients/smart-solutions.png",
            personImage: "/assets/clients/azamatova-malika.jpg",
            fullName: "Malika Azamatova",
            position: "Менеджер",
            description: "Мы невероятно довольны сотрудничеством с командой Smart Solutions Co.! Их высокий уровень профессионализма и умение находить креативные решения сделали наше сотрудничество максимально эффективным. Команда внимательно изучила наши запросы и предложила оптимальный подход к реализации проекта. Общение было всегда легким и конструктивным, а продукт был разработан вовремя и с отличным качеством. Их инновационный взгляд на задачи и технический опыт произвели на нас глубокое впечатление. Если вы ищете надежных разработчиков, мы настоятельно рекомендуем Smart Solutions Co.!",
        },
        {
            name: "GreenTech LLC",
            image: "/assets/clients/greentech.jpg",
            personImage: "/assets/clients/jaxongirova-zeboxon.jpg",
            fullName: "Zeboxon Jaxongirova",
            position: "Менеджер",
            description: "Сотрудничество с GreenTech LLC стало для нас настоящим примером профессионализма и инновационного подхода. Команда быстро поняла наши задачи и предложила уникальные решения, которые идеально соответствовали нашим требованиям. В процессе работы мы всегда чувствовали их вовлеченность и ответственность за проект. Конечный продукт был не только выполнен вовремя, но и удивил нас своим качеством и вниманием к деталям. Мы уверены, что GreenTech LLC сможет стать надежным партнером для любого бизнеса, ищущего высококлассных разработчиков!",
        },
        {
            name: "NextGen Enterprises",
            image: "/assets/clients/nextgen-enterprises.png",
            personImage: "/assets/clients/ozoda-muminova.jpg",
            fullName: "Ozoda Muminova",
            position: "Менеджер",
            description: "Сотрудничество с NextGen Enterprises превзошло все наши ожидания! Команда продемонстрировала высокий уровень профессионализма и глубокое понимание наших целей. Они предложили современные и эффективные решения, которые идеально подошли для реализации нашего проекта. Весь процесс работы был четко организован, а коммуникация — простой и продуктивной. Результат приятно удивил нас своим качеством и вниманием к деталям. Мы рады рекомендовать NextGen Enterprises как надежного партнера для разработки инновационных и качественных продуктов!",
        },
    ];


    return (
        <section>
            <div className={"container mx-auto relative"}>
                <div className={"flex flex-col absolute top-0 gap-y-[4px] -right-[30px]"}>
                    {Array(25).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <div
                    className={"w-[1047px] mx-auto grid grid-cols-2 gap-y-[50px] gap-x-[90px] pt-[142px] pb-[41px] relative"}>
                    {clientsList.map((client, index) => (
                        <CardItem key={index} {...client} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionClients;