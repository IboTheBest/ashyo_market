"use client"
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useContext } from 'react'
import HeaderSearch from './HeaderSearch'
import HeaderActions from './HeaderActions'
import Button from '@/components/Button'
import { MenuIcon } from '@/assets/icons'
import HeaderPopamCategory from './CaregoryBar'
import { Context } from '@/context/context'

const HeaderCenter = () => {
  const {setOpenCategory} = useContext(Context)
    const t = useTranslations("Header")
  return (
    <div className='containers relative flex items-center justify-between !pt-[25px] sm:!pt-[30px]'>
        <Link className='flex items-center gap-[1px]' href={"/"}>
            <Image className='w-[48px] scale-[1.3] sm:scale-[1.5] h-[48px]' src={"/logo.svg"} alt='Logo' width={48} height={48} priority/>
            <strong className='text-[33px] sm:text-[36px] font-black text-[#134E9B] leading-[100%]'>Ashyo</strong>
        </Link>
        <HeaderSearch isMobile={true}/>
        <HeaderActions/>
        <Link className='text-[#203F68] hidden-small-mobile sm:hidden font-semibold text-[14px] leading-[130%]' href={`tel:+998711234567`}>+998 (71) 123-45-67</Link>
        <Button onClick={() => setOpenCategory(true)} className='!bg-transparent sm:hidden !p-0'> <MenuIcon/></Button>
        <HeaderPopamCategory/>
    </div>
  )
}

export default HeaderCenter