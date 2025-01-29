// import SectionMain from "./components/SectionMain";
import ConsultationSection from "@/components/ConsultationSection";
import SectionCategories from "@/app/[locale]/(views)/prices/components/SectionCategories";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";

const PricesPage = async () => {
    const data = await axios.get(BASE_URL + "/services")

    return (
        <div>
            {/*<SectionMain/>*/}
            <div className={"overflow-hidden"}>
                <SectionCategories servicesData={data?.data} />
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default PricesPage;