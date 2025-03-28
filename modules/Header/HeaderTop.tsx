import { LocationIcon } from '@/assets/icons'
import LangConfig from '@/components/LangConfig'
import { Link } from '@/i18n/navigation'
import { HeaderType } from '@/types/HeaderType'
import { useTranslations } from 'next-intl'
import React from 'react'

const HeaderTop = () => {
  const t = useTranslations("Header")
  const navList: HeaderType[] = [
    {
      id: 1,
      icon: <LocationIcon />,
      title: t("tashkent"),
      path: "/"
    },
    {
      id: 2,
      icon: null,
      title: t("about-us"),
      path: "/about-us"
    },
    {
      id: 3,
      icon: null,
      title: t("products"),
      path: "/products"
    },
    {
      id: 4,
      icon: null,
      title: t("contacts"),
      path: "/contacts"
    },
  ]
  return (
    <div className='py-[11px] bg-[#EBEFF3] hidden sm:block'>
      <div className='containers flex items-center justify-between'>
        <nav className='flex items-center gap-[15px] md:gap-[28px]'>
          {navList.map((item: HeaderType) => <Link className='flex hover:text-[#134E9B] duration-300 items-center gap-[11px] text-[14px] leading-[130%] text-[#545D6A]' key={item.id} href={item.path}>
            <span>{item.icon && item.icon}</span>
            {item.title}
          </Link>)}
        </nav>
        <div className='flex items-center gap-[25px]'>
          <Link className='font-semibold text-[#545D6A] text-[14px] hover:text-[#134E9B] duration-300 leading-[130%]' href={'tel:+998711234567'}>+998 (71) 123-45-67</Link>
          <LangConfig/>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop