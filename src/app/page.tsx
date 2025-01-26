'use client'

import MainSection from "@/app/components/MainSection";
import AboutCompany from "@/app/components/AboutCompany";
import FactsAboutUs from "@/app/components/FactsAboutUs";
import SolutionSection from "@/app/components/SolutionSection";
import ServicesSection from "@/app/components/ServicesSection";
import PartnersSection from "@/app/components/PartnersSection";
import ConsultationSection from "@/components/ConsultationSection";
import '../i18n'


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
