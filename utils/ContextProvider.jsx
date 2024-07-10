"use client";

import { Provider } from "react-redux";
import { UserContextProvider } from "../store/contexts/userContext";
import { store } from "@/store";

export default function ContextPovider({ children }) {
    return (
        <Provider store={store}>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </Provider>
    )
}