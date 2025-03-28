"use client"
import { CompareIcon, DeliveryIcon, LikeIcon, ShopIcon, TimeIcon } from '@/assets/icons'
import Features from '@/components/Features'
import { formatNumber } from '@/components/ProductCard'
import { Context } from '@/context/context'
import { IMG_API } from '@/hooks/getEnv'
import { useRouter } from '@/i18n/navigation'
import Products from '@/modules/Products'
import getSingleProduct from '@/service/GetRequests/getSingleProduct'
import LikedByUser from '@/service/GetRequests/LikedByUser'
import useLikeToggle from '@/service/PostRequests/postLikeToggle'
import { LikedType } from '@/types/LikedType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'

const page = () => {
  const t = useTranslations('singleData') // Updated translation key
  const t2 = useTranslations('Products')

  const [options, setOptions] = useState<"features" | "comments">("features")

  const { singleProduct } = useParams()
  const { data: singleData } = getSingleProduct(singleProduct)
  const { user } = useContext(Context)
  const router = useRouter()
  const Lists = [
    {
      id: 1,
      title: t("delivery_uzbekistan"),
      icons: <DeliveryIcon />
    },
    {
      id: 2,
      title: t("pickup_store"),
      icons: <ShopIcon />
    },
    {
      id: 3,
      title: t("estimated_delivery"),
      icons: <TimeIcon />
    },
  ]
  function actionClick() {
    if (user) {
      router.push("/coming-soon")
    }
    else {
      router.push("/login")
    }
  }

  const { data: likedProducts } = LikedByUser()
  const isLiked = likedProducts?.some((id: number) => id === singleData.id)
  const { mutate } = useLikeToggle()
  function handleLikeClick() {
    if (user) {
      const data: LikedType = {
        userId: user?.user?.id,
        productId: singleData.id
      }
      mutate(data)
    }
    else {
      router.push("/login")
    }
  }

  return (
    <>
      <section>
        <div className='containers'>
          <div className=' flex gap-8 items-start flex-wrap'>
            <div className='max-w-[530px] w-full flex items-center] rounded-[10px] overflow-hidden justify-center relative h-[430px] bg-[#EBEFF3]'>
              <Image className='w-[341] h-[342] object-contain' src={`${IMG_API}/${singleData?.image}`} alt={t("product")} width={341} height={342} priority />
              <div className='absolute top-[26px] right-[36px]'>
                <button onClick={actionClick}><CompareIcon /></button>
                <button className={`${isLiked ? "text-red-500" : "text-[#545D6A]"}`} onClick={handleLikeClick}><LikeIcon /></button>
              </div>
            </div>
            <div className='max-w-[474px] w-full'>
              <strong className='text-[32px] leading-[120%] text-[#06172D]'>
                <span className='text-[#515D6C] fonrt-normal text-[16px] leading-[129%]'>
                  {t("product_price")}:
                </span> {formatNumber(Number(singleData?.price))}  UZS
              </strong>
              <div className='bg-[#EBEFF3] mt-[36px] rounded-[6px] w-full py-[19px]'>
                <p className='text-[16px] text-center  leading-[130%] text-[#545D6A]'>{t("installment_payment")}</p>
              </div>
              <div className='flex mt-[10px] items-center w-full gap-[14px]'>
                <button className='w-[50%] py-[16px] border-[2px] rounded-[6px] border-[#134E9B] line-clamp-1 text-[#134E9B]'>{t("add_to_cart")}</button>
                <button className='w-[50%] py-[16px] border-[2px] rounded-[6px] text-white bg-[#134E9B]'>{t("buy_now")}</button>
              </div>
              <ul className='flex mt-[43px] flex-col gap-[20px]'>
                {Lists.map(item => (
                  <li key={item.id} className='flex items-center gap-[16px]'>
                    {item.icons}
                    <span className='text-[#06172DB2] text-[16px] leading-[130%]'>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='mt-[80px] max-w-[651px] w-full'>
            <div className='flex items-center gap-[85px]'>
              <span onClick={()=>setOptions("features")} className={`cursor-pointer ${options == "features" ? "text-[#06172D] font-bold text-[18px] leading-[130%] underline" : "text-[#515D6C] text-[18px] font-normal"}`}>{t("phone_features")}</span>
              <span onClick={()=>setOptions("comments")} className={`cursor-pointer ${options == "comments" ? "text-[#06172D] font-bold text-[18px] leading-[130%] underline" : "text-[#515D6C] text-[18px] font-normal"}`}>{t("customer_reviews")}</span>
            </div>
            {options == "features" && <Features singleProduct={singleData} />}
            {options == "comments" && <span>{t("no_comments")}</span>}
          </div>
        </div>

      </section>
      <Products title={t2("title")} />
    </>
  )
}

export default page