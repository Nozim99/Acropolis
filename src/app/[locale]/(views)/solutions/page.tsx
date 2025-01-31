import SectionSolution from "./components/SectionSolution";
import ConsultationSection from "@/components/ConsultationSection";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";


interface PropsType {
    params: Promise<{ locale?: string }>
}

const PricesPage = async ({params}: PropsType) => {
    const paramsData = await params
    const currentLocale = paramsData?.locale || 'ru'
    let solutionsData;

    try {
        const fetchData = await axios.get(BASE_URL + "/solutions")
        solutionsData = fetchData?.data?.solutions?.map((item: {
            category: 'it-infrastructure' | 'system-software' | 'information-security';
            title: string;
            title_uz?: string;
            title_en?: string;
            description: string[];
            description_uz?: string[];
            description_en?: string[];
        }) => {
            return {
                category: item.category,
                title: currentLocale === 'ru'
                    ? item.title
                    : currentLocale === 'uz'
                        ? item.title_uz || item.title
                        : item.title_en || item.title,
                description: currentLocale === 'ru'
                    ? item.description
                    : currentLocale === 'uz'
                        ? item?.description_uz?.length || item.description
                        : item?.description_en?.length || item.description,
            }
        }) || []
    } catch (error) {
        console.error("API Error", error);
    }

    return (
        <div>
            {/*<SectionMain />*/}
            <div className={"overflow-hidden"}>
                <SectionSolution solutionsData={solutionsData}/>
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default PricesPage;