"use client"
import React from 'react'
import "./style.css"
import getBrands from '@/service/GetRequests/getBrands'
import { BrandType } from '@/types/BrandType'
import Image from 'next/image'
import { IMG_API } from '@/hooks/getEnv'

const Brands = () => {
    const {data:brands, isLoading} = getBrands()
  return (
    <div className='containers !pt-[35px] sm:!pt-[100px] brand-wrapper'>
        {isLoading ? "Loading..." : brands.map((item:BrandType) => (
            <div key={item.id} className='font-semibold text-[16px] text-[#134E9B] brand-item flex justify-center items-center text-center py-[20px] rounded-[6px]'>
                {!item.image ? item.name : 
                <Image className='max-w-[200px] max-h-[70px] w-auto h-auto object-contain' src={`${IMG_API}/${item.image}`} alt='brand img' width={200} height={70} priority/>}
            </div>
        ))}
    </div>
  )
}

export default Brands