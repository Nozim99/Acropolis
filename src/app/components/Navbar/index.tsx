import Image from "next/image";
import {OrnamentIcon} from "@/components/Icons";
import Link from "next/link";
import LanguageSelector from "@/app/components/LanguageInput";
import NavbarMobile from "@/app/components/Navbar/components/NavbarMobile";
import {navList} from "@/app/utils/navList";
import NavbarDesktop from "@/app/components/Navbar/components/NavbarDesktop";


const Navbar = () => {
    return (
        <>
            <NavbarMobile/>
            <NavbarDesktop/>
        </>
    );
};

export default Navbar;