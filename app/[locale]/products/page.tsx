"use client"
import ProductCard from '@/components/ProductCard'
import getProducts from '@/service/GetRequests/getProducts'
import { ProductType } from '@/types/ProductType'
import React from 'react'

const page = () => {
  const {data, isLoading} = getProducts()
  return (
    <div className='containers flex items-center justify-center sm:justify-between flex-wrap gap-[10px]'>
        {isLoading ? "Loading..." : data.map((item:ProductType)=><ProductCard key={item.id} item={item}/>)}
    </div>
  )
}

export default page