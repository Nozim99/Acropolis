import MainSection from "./components/MainSection";
import ConsultationSection from "@/components/ConsultationSection";
import MissionSection from "@/app/[locale]/(views)/about-us/components/MissionSection";
import WhyUsSection from "@/app/[locale]/(views)/about-us/components/WhyUsSection";
import NotAllSection from "@/app/[locale]/(views)/about-us/components/NotAllSection";

const AboutUs = () => {
    return (
        <div>
            <MainSection/>
            <MissionSection/>
            <WhyUsSection/>
            <NotAllSection/>
            <ConsultationSection/>
        </div>
    )
}

export default AboutUs;