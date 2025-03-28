import { ChangeEvent, ChangeEventHandler } from "react";


export interface InputType {
    name?:string,
    placeholder:string,
    onChange?:ChangeEventHandler<HTMLInputElement>,
    type:"text" | "email" | "password" | "number",
    value?:string,
    className?:string
}