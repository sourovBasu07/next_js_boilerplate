// Wrapper layout for the whole app including other sub-layouts 

import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ContextPovider from "@/utils/wrappers/ContextProvider";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

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
        <html lang="en">
            <body className={poppins.className}>
                <ContextPovider>
                    {children}
                </ContextPovider>
            </body>
        </html>
    );
}