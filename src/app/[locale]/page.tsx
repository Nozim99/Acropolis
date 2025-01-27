'use client'

import ConsultationSection from "@/components/ConsultationSection";
import MainSection from "@/app/[locale]/components/MainSection";
import AboutCompany from "@/app/[locale]/components/AboutCompany";
import FactsAboutUs from "@/app/[locale]/components/FactsAboutUs";
import SolutionSection from "@/app/[locale]/components/SolutionSection";
import ServicesSection from "@/app/[locale]/components/ServicesSection";
import PartnersSection from "@/app/[locale]/components/PartnersSection";


export default function Home() {

    return (
        <div className={""}>
            <MainSection/>
            <AboutCompany/>
            <FactsAboutUs/>
            <SolutionSection/>
            <ServicesSection/>
            <div className={"overflow-hidden"}>
                <PartnersSection/>
                <ConsultationSection/>
            </div>
        </div>
    );
}
