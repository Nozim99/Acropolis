import ConsultationSection from "@/components/ConsultationSection";
import MainSection from "@/app/[locale]/components/MainSection";
import AboutCompany from "@/app/[locale]/components/AboutCompany";
import FactsAboutUs from "@/app/[locale]/components/FactsAboutUs";
import SolutionSection from "@/app/[locale]/components/SolutionSection";
import ServicesSection from "@/app/[locale]/components/ServicesSection";
import PartnersSection from "@/app/[locale]/components/PartnersSection";
import axios from "axios";
import {BASE_URL} from "@/utils/constants";


export default async function Home() {
    let clientsData;

    try {
        clientsData = await axios.get(BASE_URL + "/clients")
    } catch (error) {
        console.error("API Error", error)
    }

    return (
        <div className={""}>
            <MainSection/>
            <AboutCompany/>
            <FactsAboutUs/>
            <SolutionSection/>
            <ServicesSection/>
            <div className={"overflow-hidden"}>
                <PartnersSection clientsData={clientsData?.data?.clients} />
                <ConsultationSection/>
            </div>
        </div>
    );
}
