"use client"
import { ContextType } from "@/types/ContextType";
import { UserRespondType } from "@/types/UserRespondType";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

export const Context = createContext<ContextType>({
    openCategory: false,
    setOpenCategory: () => null,
    user: null,
    setUser: () => null,
})

export const GlobalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [openCategory, setOpenCategory] = useState<boolean>(false)
    const [user, setUser] = useState<UserRespondType | null>(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return <Context.Provider value={{ openCategory, user, setUser, setOpenCategory }}>{children}</Context.Provider>
}