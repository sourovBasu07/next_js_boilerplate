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
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <div className="w-3/4 flex flex-col">
                <DashboardNavbar />
                {children}
            </div>
        </div>
        // </SessionProvider>
    );
}