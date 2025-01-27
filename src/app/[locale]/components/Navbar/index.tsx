'use client'


import NavbarMobile from "@/app/[locale]/components/Navbar/components/NavbarMobile";
import NavbarDesktop from "@/app/[locale]/components/Navbar/components/NavbarDesktop";

const Navbar = () => {
    return (
        <>
            <NavbarMobile/>
            <NavbarDesktop/>
        </>
    );
};

export default Navbar;