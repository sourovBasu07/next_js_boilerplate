"use client";

import { Provider } from "react-redux";
import { UserContextProvider } from "../store/contexts/userContext";
import { store } from "@/store";
import { SessionProvider } from "next-auth/react";

export default function ContextPovider({ children }) {
    return (
        // <SessionProvider>
        <Provider store={store}>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </Provider>
        // </SessionProvider>
    )
}