"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { UserContextProvider } from "@/store/contexts/userContext";

export default function ContextPovider({ children }) {
    return (
        <Provider store={store}>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </Provider>
    )
}