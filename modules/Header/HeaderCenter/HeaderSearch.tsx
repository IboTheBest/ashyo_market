"use client"
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { Context } from '@/context/context'
import { useTranslations } from 'next-intl'
import React, { FC, useContext} from 'react'

const HeaderSearch: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const t = useTranslations("Header")
  const { setOpenCategory, openCategory } = useContext(Context)

  return (
    <div className={`flex gap-[5px] sm:gap-[10px] ${isMobile ? "hidden-searchbar" : ""}`}>
      <Button onClick={() => setOpenCategory(!openCategory)} className='!w-[35%] !h-[40px] sm:!w-[160px] sm:!h-[47px]' icon={<ArrowDownIcon extrClass={`${openCategory && "rotate-[180deg]"}`} />} iconPosition={"right"}>{t("category")}</Button>
      <div className={`relative ${!isMobile && "w-[65%] sm:w-full"}`}>
        <Input className={`${!isMobile && "!w-full"}`} placeholder={t("inputPlaceholder")} type='text' name='search' />
        <Button className='!absolute top-0 right-0 !w-[40px] !h-[40px] sm:!h-[48px] sm:!w-[60px] !p-0'> <SearchIcon className='w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]' /> </Button>
      </div>
    </div>
  )
}

export default HeaderSearch