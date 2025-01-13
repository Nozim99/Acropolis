import {OrnamentIcon} from "@/components/Icons";
import Image from "next/image";
import {navList} from "@/app/utils/navList";
import Link from "next/link";
import LanguageSelector from "@/app/components/LanguageInput";

const NavbarDesktop = () => {
    return (
        <header className={"pb-[20px] bg-white hidden lg:block"}>
            <div className={"absolute top-0 left-0 right-0 overflow-hidden flex justify-center"}>
                <OrnamentIcon className={"w-[1600px] h-auto"}/>
            </div>
            <div className={"h-[60px]"}></div>
            <nav
                className={"flex justify-between items-center px-[25px] py-[8px] container mx-auto bg-[var(--darkBlue)] rounded-[14px] font-light text-xl xl:text-2xl"}>
                <Image src={"/assets/acropolis-logo.png"} width={153} height={70} alt={"ACROPOLIS logo"}/>
                <ul className={"flex items-center gap-x-[20px] xl:gap-x-[49px]"}>
                    {
                        navList.map(item => (
                            <li key={item.path}><Link href={item.path}>{item.label}</Link></li>
                        ))
                    }
                </ul>
                <LanguageSelector/>
            </nav>
        </header>
    );
};

export default NavbarDesktop;