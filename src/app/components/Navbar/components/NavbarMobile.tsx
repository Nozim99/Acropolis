import Image from "next/image";
import NavbarModal from "./NavbarModal";


const NavbarMobile = () => {
    return (
        <>
            <header className={"bg-white pb-[30px] sm:pt-[20px] sm:px-[10px] md:pt-[30px] md:px-[25px] lg:hidden"}>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-between items-center py-[15px] bg-[var(--darkBlue)] px-[15px] sm:rounded-[10px] "}>
                        <Image
                            className={""}
                            src={"/assets/acropolis-logo.png"}
                            width={100}
                            height={40}
                            alt={"ACROPOLIS logo"}
                        />
                        <NavbarModal />
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavbarMobile;