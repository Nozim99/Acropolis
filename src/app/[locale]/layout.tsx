import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from 'next-intl/server'
import Navbar from "@/app/[locale]/components/Navbar";
import Footer from "@/app/[locale]/components/Footer";
import {Locale, routing} from "@/i18n/routing";
import {notFound} from "next/navigation";


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
        images: [
            {
                url: '/assets/acropolis-logo.png',
                width: 800,
                height: 600,
                alt: 'Acropolis',
            },
        ],
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

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
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