// Layout for intercepting route 
// @param modal is the interceping modal slot 
// Need to use the same name as the slot route name 

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
    title: "Next JS App",
    description: "App boilerplate created using Next.js",
    icons: {
        icon: "next.svg",
    },
};

export default function RootLayout({
    children,
    modal
}) {
    return (
        <div className="">
            {modal}
            {children}
        </div>
    );
}