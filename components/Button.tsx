import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const Button:FC<ButtonType> = ({ className, children, icon, iconPosition, onClick, bage, onBlur }) => {
    return (
        <button id='actions' onBlur={onBlur} onClick={onClick} className={`cursor-pointer relative flex py-[12px] sm:py-[14px] px-0 sm:px-[25px] bg-[#134E9B] text-[12px] sm:text-[16px] font-semibold rounded-[6px] text-white items-center justify-center gap-[10px] sm:gap-[20px] ${className}`}>
            {iconPosition == "left" && icon}
            {children}
            {iconPosition == "right" && icon}
            {bage > 0 && <span className='!absolute top-[-20%] right-[-20%] w-[20px] h-[20px] bg-[#E81504] rounded-full flex items-center justify-center font-bold text-[10px] text-white'>{bage}</span>}
        </button>
    )
}

export default Button