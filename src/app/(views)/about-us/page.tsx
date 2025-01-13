import MainSection from "./components/MainSection";
import MissionSection from "@/app/(views)/about-us/components/MissionSection";
import WhyUsSection from "@/app/(views)/about-us/components/WhyUsSection";
import NotAllSection from "@/app/(views)/about-us/components/NotAllSection";
import ConsultationSection from "@/components/ConsultationSection";

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