"use client";

import React, { useState } from "react";
import { createContext } from "react";

const initialUser = {
    name: "Sourov",
    role: "user",
};

export const UserContext = createContext(initialUser);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
};