"use client"
import React from 'react'
import "./style.css"
import getCategory from '@/service/GetRequests/getCategory'
import { useTranslations } from 'next-intl'
import { CategoryType } from '@/types/HeaderType'
import Image from 'next/image'
import { IMG_API } from '@/hooks/getEnv'
import Button from '@/components/Button'

const Category = () => {
    const t = useTranslations("Products")
    const {data:categories} = getCategory(6)
    
  return (
    <section className='containers !py-[48px] sm:!py-[100px] category'>
        {categories.map((item:CategoryType) => (
            <div key={item.id} className='category-item relative'>
                {!item.image ? <Button>{item.name}</Button> : 
                <Image className='lg:!w-auto lg:!h-auto absolute right-0 bottom-0' src={`${IMG_API}/${item.image}`} alt={item.name} priority width={290} height={290}/>}
                <button className='absolute line-clamp-1 sm:line-clamp-2 text-[8px] py-[2px] lg:text-[16px] top-[8px] sm:top-[13px] left-[8px] sm:left-[13px] sm:py-[4px] px-[8px] sm:px-[15px] border-[1px] border-white text-white bg-transparent rounded-[30px]'> {item.name} </button>
            </div>
        ))}
    </section>
  )
}

export default Category