// Sub-layout for landing page 

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
}) {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}