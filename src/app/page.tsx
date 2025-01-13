import MainSection from "@/app/components/MainSection";
import AboutCompany from "@/app/components/AboutCompany";
import FactsAboutUs from "@/app/components/FactsAboutUs";
import SolutionSection from "@/app/components/SolutionSection";
import ServicesSection from "@/app/components/ServicesSection";
import PartnersSection from "@/app/components/PartnersSection";
import ClientsSection from "@/app/components/ClientsSection";
import ConsultationSection from "@/components/ConsultationSection";
import FAQSection from "@/app/components/FAQSection";


export default function Home() {
    return (
        <div>
            <MainSection/>
            <AboutCompany/>
            <FactsAboutUs/>
            <SolutionSection/>
            <ServicesSection/>
            {/*<ClientsSection />*/}
            <div className={"overflow-hidden"}>
                <PartnersSection/>
                <ConsultationSection/>
            </div>
            <FAQSection />
        </div>
    );
}
