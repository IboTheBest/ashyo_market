import React, { SetStateAction } from "react";
import { UserRespondType } from "./UserRespondType";

export interface ContextType {
    openCategory: boolean,
    setOpenCategory: React.Dispatch<SetStateAction<boolean>>
    user: UserRespondType | null;
    setUser: (user: UserRespondType | null) => void;
}