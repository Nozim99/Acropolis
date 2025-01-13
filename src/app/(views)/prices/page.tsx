import SectionMain from "./components/SectionMain";
import ConsultationSection from "@/components/ConsultationSection";
import SectionCategories from "@/app/(views)/prices/components/SectionCategories";

const PricesPage = () => {
    return (
        <div>
            <SectionMain/>
            <div className={"overflow-hidden"}>
                <SectionCategories/>
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default PricesPage;