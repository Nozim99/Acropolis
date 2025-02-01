import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from 'next-intl/server'
import Navbar from "@/app/[locale]/components/Navbar";
import Footer from "@/app/[locale]/components/Footer";
import {Locale, redirect, routing} from "@/i18n/routing";
import Head from "next/head";


const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Acropolis",
    description: "Наша команда состоит из высококвалифицированных специалистов и обладает богатым опытом работы в ведущих международных ИТ-компаниях, крупных банках и телекоммуникационных операторах.",
    icons: {
        icon: '/assets/title-logo.png'
    },
    openGraph: {
        title: "Acropolis",
        description: "Наша команда состоит из высококвалифицированных специалистов и обладает богатым опытом работы в ведущих международных ИТ-компаниях, крупных банках и телекоммуникационных операторах.",
        url: "https://www.acropolis.com",
        siteName: "Acropolis",
    }
};


export default async function RootLayout({
                                             children,
                                             params
                                         }: Readonly<{
    children: ReactNode;
    params: { locale: string }
}>) {
    const {locale} = await params;

    const messages = await getMessages();

    if (!routing.locales.includes(locale as Locale)) {
        redirect({locale: "ru", href: "/"})
    }

    return (
        <html
            lang={locale}
        >
        <Head>
            <link rel="icon" href="/assets/title-logo.png"/>
        </Head>
        <body
            className={`${inter.variable} antialiased `}
        >
        <NextIntlClientProvider messages={messages}>
            <Navbar/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
};