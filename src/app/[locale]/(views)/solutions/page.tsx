// import SectionMain from "./components/SectionMain";
import SectionSolution from "./components/SectionSolution";
import ConsultationSection from "@/components/ConsultationSection";

const PricesPage = () => {
    return (
        <div>
            {/*<SectionMain />*/}
            <div className={"overflow-hidden"}>
                <SectionSolution/>
                <ConsultationSection />
            </div>
        </div>
    )
}

export default PricesPage;