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


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Acropolis",
};

const navList = [
  {
    path: "/",
    label: "Главная"
  },
  {
    path: "/about-us",
    label: "О Нас"
  },
  {
    path: "/prices",
    label: "Услуги"
  },
  {
    path: "/clients",
    label: "Клиенты"
  },
  {
    path: "/contact",
    label: "Контакты"
  },
]

const socialMediaLinks = [
  {
    link: "",
    icon: <FacebookIcon/>
  },
  {
    link: "",
    icon: <InstagramIcon/>,
  },
  {
    link: "",
    icon: <LinkedinIcon/>,
  },
  {
    link: "",
    icon: <TelegramIcon/>,
  },
]


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
    <header className={"pb-[20px] bg-white"}>
      <div className={"absolute top-0 left-0 right-0 overflow-hidden flex justify-center"}>
        <OrnamentIcon className={"w-[1600px] h-auto"}/>
      </div>
      <div className={"h-[60px]"}></div>
      <nav
        className={"flex justify-between items-center px-[25px] py-[8px] container mx-auto bg-[var(--darkBlue)] rounded-[14px] font-light text-2xl"}>
        <Image src={"/assets/acropolis-logo.png"} width={153} height={70} alt={"ACROPOLIS logo"}/>
        <ul className={"flex items-center gap-x-[49px]"}>
          {
            navList.map(item => (
              <li key={item.path}><Link href={item.path}>{item.label}</Link></li>
            ))
          }
        </ul>
        <LanguageSelector />
      </nav>
    </header>
    {children}
    <footer className={"container mx-auto pt-[30px] pb-[14px]"}>
      <div className={"grid grid-cols-6 items-start"}>
        <Image src={"/assets/acropolis-logo.png"} width={167} height={98} alt={"ACROPOLIS logo"}/>

        <div>
          <h4 className={"mb-[10px] text-center text-lg"}>Контакты</h4>
          <div className={"flex items-center gap-x-[8px] mb-[34px]"}>
            <PhoneIcon/>
            <ul>
              <li><a href={"tel:+998938048414"}>+998 93 804 84 14</a></li>
              <li><a href="tel:+998900921828">+998 90 092 18 28</a></li>
            </ul>
          </div>
          <div className={"flex items-center gap-x-[8px]"}>
            <MailIcon/>
            <a href="mailto:info@acropolis.uz">info@acropolis.uz</a>
          </div>
        </div>

        <div>
          <h4 className={"mb-[10px] text-lg text-center"}>Социальные сети</h4>
          <ul className={"flex items-center justify-center gap-x-[16px]"}>{
            socialMediaLinks.map((item, index) => (
              <li key={index}><a href={item.link}>{item.icon}</a></li>
            ))
          }</ul>
        </div>

        <div className={"flex justify-center"}>
          <ul className={"grid gap-y-[13px] "}>{
            navList.map(item => (
              <li key={item.path}><Link href={item.path}>{item.label}</Link></li>
            ))
          }</ul>
        </div>

        <div className={"col-span-2"}>
          <h4 className={"mb-[10px] text-lg"}>Адрес</h4>
          <p>Республика Узбекистан, г. Ташкент ​1-й Проезд Дархан, д. 7, БЦ "TUT"</p>
        </div>
      </div>

      <h5 className={"mt-[34px] text-center text-xl font-medium"}>&copy; 2024 Acropolis Integro</h5>
    </footer>
    </body>
    </html>
  );
};
