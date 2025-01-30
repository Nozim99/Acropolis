import ConsultationSection from "@/components/ConsultationSection";
import SectionCategories from "@/app/[locale]/(views)/prices/components/SectionCategories";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";


export async function generateStaticParams() {
    return [{locale: "ru"}, {locale: "uz"}, {locale: "en"}];
}


interface PropsType {
    params: Promise<{ locale?: string }>
}


const PricesPage = async ({params}: PropsType) => {
    const paramsData = await params
    const currentLocale = paramsData?.locale || 'ru'
    let servicesData;

    try {
        const fetchData = await axios.get(BASE_URL + "/services")
        servicesData = fetchData?.data?.map((item: {
            title: string;
            description: string;
            title_uz?: string;
            title_en?: string;
            description_uz?: string;
            description_en?: string
        }) => {
            return {
                title: currentLocale === 'ru'
                    ? item.title
                    : currentLocale === 'uz'
                        ? item.title_uz || item.title
                        : item.title_en || item.title,
                description: currentLocale === 'ru'
                    ? item.description
                    : currentLocale === 'uz'
                        ? item.description_uz || item.description
                        : item.description_en || item.description,
            }
        }) || []
    } catch (error) {
        console.error("API Error", error);
    }

    return (
        <div>
            {/*<SectionMain/>*/}
            <div className={"overflow-hidden"}>
                <SectionCategories servicesData={servicesData}/>
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default PricesPage;