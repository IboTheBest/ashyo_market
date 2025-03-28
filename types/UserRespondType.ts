import { UserType } from "./UserType"

export interface UserRespondType {
    accessToken:string
    message: string
    refreshToken:string
    user:UserType
}