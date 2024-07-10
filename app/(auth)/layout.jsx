// Sub-layout for auth routes group 

import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ContextProvider from "@/utils/ContextProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: "Get Started",
    description: "App boilerplate created using Next.js",
    icons: {
        icon: "next.svg",
    },
};

export default function RootLayout({
    children,
}) {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}