import SectionMain from "./components/SectionMain"
import SectionLocation from "./components/SectionLocation"
import ConsultationSection from "@/components/ConsultationSection";


const ContactPage = () => {
    return (
        <div>
            <SectionMain/>
            <div className={"overflow-hidden"}>
                <SectionLocation/>
                <ConsultationSection/>
            </div>
        </div>
    )
}

export default ContactPage;