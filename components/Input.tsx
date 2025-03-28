import { InputType } from "@/types/InputType";
import { FC } from "react";

const Input:FC<InputType> = ({name, placeholder, type, onChange, value, className}) => {
  return (
    <input autoComplete="off" className={`placeholder:text-[#00000033] w-[518px] py-[14.5px] sm:py-[16px] pl-[20px] sm:pl-[26px] bg-[#EBEFF3] rounded-[6px] text-[10px] sm:text-[13px] leading-[100%] outline-none ${className}`} name={name} placeholder={placeholder} type={type} onChange={onChange} value={value}/>
  );
}

export default Input