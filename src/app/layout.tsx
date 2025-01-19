import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {ReactNode} from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


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
        <Footer/>
        </body>
        </html>
    );
};