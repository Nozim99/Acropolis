'use client'

import NavbarMobile from "@/app/components/Navbar/components/NavbarMobile";
import NavbarDesktop from "@/app/components/Navbar/components/NavbarDesktop";
import "../../../i18n"


const Navbar = () => {
    return (
        <>
            <NavbarMobile/>
            <NavbarDesktop/>
        </>
    );
};

export default Navbar;