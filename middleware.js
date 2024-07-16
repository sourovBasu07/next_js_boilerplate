// export { auth as middleware } from "@/auth";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(request) {
    // const session = await auth();
    // if (!session && request.nextUrl.pathname.includes("dashboard")) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }
};

// Routes to be matched in middleware 
export const config = {
    // matcher: ["/dashboard/:path*", "/login"]
}