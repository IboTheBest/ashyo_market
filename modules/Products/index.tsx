"use client"
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import getProducts from '@/service/GetRequests/getProducts';
import { ProductType } from '@/types/ProductType';
import ProductCard from '../../components/ProductCard';
import Button from '@/components/Button';

const Products: FC<{ className?: string, title: string }> = ({ className, title }) => {
    const t = useTranslations("Products")
    const { data: products } = getProducts()

    return (
        <section className={`pt-[40px] sm:pt-[80px] products ${className}`}>
            <div className="containers">
                <h2 className='font-bold text-[16px] sm:text-[32px] text-[#000000]'>{title}</h2>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={50}
                pagination={{ clickable: true, }}
                className="!hidden md:!flex mySwiper mt-[50px]"
            >
                {products.map((item: ProductType) => <SwiperSlide key={item.id}> <ProductCard item={item} /> </SwiperSlide>)}
            </Swiper>
            <div className='!mt-[20px] md:hidden containers product-mobile-wrapper grid grid-cols-2 !gap-x-[15px] !gap-y-[30px]'>
                {products.map((item: ProductType) => <ProductCard key={item.id} item={item} />)}
            </div>
            <Button className='sm:hidden !bg-[#EBEFF3] !text-[#134E9B] !w-[50%] !mx-auto !mt-[30px]'> {t("more")} </Button>
        </section>
    )
}

export default Products