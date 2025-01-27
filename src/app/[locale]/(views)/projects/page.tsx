import SectionMain from "./components/SectionMain"
import SectionClients from "./components/SectionCleitns";
import ConsultationSection from "@/components/ConsultationSection";


const ClientsPage = () => {
    return <div>
        <SectionMain/>
        <div className={"overflow-hidden"}>
            <SectionClients/>
            <ConsultationSection/>
        </div>
    </div>;
};

export default ClientsPage;