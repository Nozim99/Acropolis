// import SectionMain from "./components/SectionMain"
import SectionClients from "./components/SectionCleitns";
import ConsultationSection from "@/components/ConsultationSection";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";


interface PropsType {
    params: Promise<{ locale?: string }>
}


const ClientsPage = async ({params}: PropsType) => {
    const paramsData = await params
    const currentLocale = paramsData?.locale || 'ru'
    let projectData;

    try {
        const fetchData = await axios.get(BASE_URL + "/projects")

        projectData = fetchData?.data?.projects?.map((item: {
            image: {
                url: string;
                cloudinaryId: string;
            };
            title: string;
            title_uz?: string;
            title_en?: string;
            description: string[];
            description_uz?: string[];
            description_en?: string[];
        }) => {
            return {
                image: item.image.url,
                title: currentLocale === 'ru'
                    ? item.title
                    : currentLocale === 'uz'
                        ? item.title_uz || item.title
                        : item.title_en || item.title,
                description: currentLocale === 'ru'
                    ? item.description
                    : currentLocale === 'uz'
                        ? item?.description_uz || item.description
                        : item?.description_en || item.description,
            }
        }) || []
    } catch (error) {
        console.error("API Error", error);
    }


    return <div>
        {/*<SectionMain/>*/}
        <div className={"overflow-hidden"}>
            <SectionClients projectData={projectData} />
            <ConsultationSection/>
        </div>
    </div>;
};

export default ClientsPage;