// import SectionMain from "./components/SectionMain";
import ConsultationSection from "@/components/ConsultationSection";
import SectionCategories from "@/app/[locale]/(views)/prices/components/SectionCategories";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";

const PricesPage = async () => {
    let servicesData;

    try {
        servicesData = await axios.get(BASE_URL + "/services")
    } catch (error) {
        console.error("API Error", error);
    }

    return (
        <div>
            {/*<SectionMain/>*/}
            <div className={"overflow-hidden"}>
                <SectionCategories servicesData={servicesData?.data} />
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default PricesPage;