import {MiniOrnament} from "@/components/Icons";
import CardItem from "@/app/[locale]/(views)/projects/components/CardItem";


interface iProps {
    projectData: {
        title: string;
        description: string;
        image: string;
    }[]
}


const SectionClients = ({projectData}: iProps) => {


    return (
        <section>
            <div className={"mContainer relative"}>
                <div className={"flex-col absolute top-0 gap-y-[4px] -right-[80px] hidden lg:flex"}>
                    {Array(25).fill(0).map((_, i) => (
                        <MiniOrnament key={i}/>
                    ))}
                </div>

                <div
                    className={"mx-auto grid grid-cols-1 gap-y-[25px] pt-[60px] pb-[41px] relative sm:grid-cols-2 sm:pt-[80px] md:pt-[90px] lg:pt-[120px] xl:pt-[142px] lg:w-[900px] lg:gap-x-[20px] xl:w-[1047px] xl:gap-x-[10px]"}
                >
                    {projectData.map((project, index) => (
                        <CardItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionClients;