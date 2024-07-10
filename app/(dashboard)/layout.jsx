// Sub-layout for dashboard routes group 

import DashboardSidebar from "../../components/layout/DashboardSidebar";
import DashboardNavbar from "@/components/navbar/DashboardNavbar";

export const metadata = {
    title: "Dashboard",
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
            <DashboardSidebar />
            <div className="">
                <DashboardNavbar />
                {children}
            </div>
        </div>
        // </SessionProvider>
    );
}