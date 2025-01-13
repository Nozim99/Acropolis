import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    OrnamentIcon,
    PhoneIcon,
    TelegramIcon
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "@/app/components/LanguageInput";
import Navbar from "@/app/components/Navbar";
import {navList} from "@/app/utils/navList";
import {socialMediaLinks} from "@/app/utils/social_media_list";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Acropolis",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} antialiased`}
        >
        <Navbar/>
        {children}
        <footer className={"bg-[#002B2C]"}>
            <div className={"mContainer pt-[30px] pb-[14px]"}>
                {/*<div className={"grid grid-cols-6 items-start"}>*/}
                <div className={"grid grid-cols-1 items-start gap-y-[40px] md:grid-cols-3 lg:grid-cols-6"}>
                    <Image
                        src={"/assets/acropolis-logo.png"}
                        className={"mx-auto lg:w-[140px] lg:h-auto"}
                        width={167}
                        height={98}
                        alt={"ACROPOLIS logo"}
                    />

                    <div>
                        <h4 className={"mb-[10px] text-center text-lg"}>Контакты</h4>
                        {/*<div className={"flex items-center gap-x-[8px] mb-[34px]"}>*/}
                        <div className={"flex items-center gap-x-[8px] mb-[14px] justify-center lg:gap-x-[4px] lg:text-sm xl:gap-x-[8px] xl:text-base"}>
                            <PhoneIcon/>
                            <ul>
                                <li><a href={"tel:+998938048414"}>+998 93 804 84 14</a></li>
                                <li><a href="tel:+998900921828">+998 90 092 18 28</a></li>
                            </ul>
                        </div>
                        {/*<div className={"flex items-center gap-x-[8px]"}>*/}
                        <div className={"flex items-center gap-x-[8px] justify-center"}>
                            <MailIcon/>
                            <a href="mailto:info@acropolis.uz">info@acropolis.uz</a>
                        </div>
                    </div>

                    <div className={"md:order-[2]"}>
                        <h4 className={"mb-[10px] text-lg text-center"}>Социальные сети</h4>
                        <ul className={"flex items-center justify-center gap-x-[16px]"}>{
                            socialMediaLinks.map((item, index) => (
                                <li key={index}><a href={item.link}>{item.icon}</a></li>
                            ))
                        }</ul>
                    </div>

                    <div className={"flex justify-center"}>
                        {/*<ul className={"grid gap-y-[13px] "}>*/}
                        <ul className={"grid gap-y-[13px] text-center"}>
                            {
                                navList.map(item => (
                                    <li key={item.path}><Link href={item.path}>{item.label}</Link></li>
                                ))
                            }</ul>
                    </div>

                    <div className={"text-center md:order-2 md:col-span-2 md:text-start lg:ml-[34px]"}>
                        <h4 className={"mb-[10px] text-center text-lg"}>Адрес</h4>
                        <p>Республика Узбекистан, г. Ташкент 1-й Проезд Дархан, д. 7, БЦ "TUT"</p>
                    </div>
                </div>

                {/*<h5 className={"mt-[34px] text-center text-xl font-medium"}>*/}
                <h5 className={"mt-[34px] text-center text-sm font-medium sm:text-base lg:text-lg xl:text-xl"}>
                    &copy; 2024 Acropolis Integro
                </h5>
            </div>
        </footer>
        </body>
        </html>
    );
};