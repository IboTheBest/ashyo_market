import { CompareIcon, LikeIcon, SavedIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { Context } from '@/context/context'
import { IMG_API } from '@/hooks/getEnv'
import LikedByUser from '@/service/GetRequests/LikedByUser'
import LikeToggle from '@/service/PostRequests/postLikeToggle'
import { LikedType } from '@/types/LikedType'
import { ProductType } from '@/types/ProductType'
import { useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { FC, useContext } from 'react'

export function formatNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
const ProductCard: FC<{ item: ProductType }> = ({ item }) => {
  const router = useRouter()

  const t = useTranslations("Products")

  function handleProductClick(e: any) {
    if (!(e.target as HTMLElement).closest("#actions")) {
      router.push(`/products/${item.id}`);
    }
  }
  const { user } = useContext(Context)
  function actionClick() {
    if (user) {
      router.push("/coming-soon")
    }
    else {
      router.push("/login")
    }
  }


  const { data:likedProducts } = LikedByUser()

  const isLiked = likedProducts?.some((id:number) => id === item.id)

  const { mutate } = LikeToggle()
  function handleLikeClick(id: number) {
    if (user) {
      const data: LikedType = {
        userId: user?.user?.id,
        productId: id
      }
      mutate(data)
    }
    else {
      router.push("/login")
    }

  }
  return (
    <div onClick={handleProductClick} className='max-w-[273px]'>
      <div className='bg-[#EBEFF3] cursor-pointer rounded-[8px] mb-4 relative h-[180px] sm:h-[280px] flex items-center justify-center'>
        <Image className='w-[130px] sm:w-[202px] h-[130px] sm:h-[202px]' src={`${IMG_API}/${item.image}`} alt='Product img' width={202} height={202} priority />
        <button onClick={() => handleLikeClick(item.id)} id='actions' className={`absolute ${user && isLiked ? "text-red-500" : "text-black"} top-[12px] sm:top-[20px] right-[12px] sm:right-[24px] cursor-pointer`}> <LikeIcon /> </button>
      </div>
      <p className='text-[#545D6A] line-clamp-1 text-[12px] sm:text-[14px] mb-[20px] sm:mb-[28px]'>{item.description}</p>
      <div className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center'>
        <strong className='text-[#0A1729] text-[15px] sm:text-[20px] mb-[10px]'>{formatNumber(item.price)} usz</strong>
        <div id='actions' className='flex gap-[10px] w-full sm:w-auto'>
          <Button onClick={actionClick} className='!bg-transparent !p-0 w-[30%] sm:!w-[52px] !h-[52px] border-[1px] border-[#EBEFF3]'> <CompareIcon /> </Button>
          <Button onClick={actionClick} className='hidden sm:flex !w-[52px] !p-0 !h-[52px]'> <SavedIcon /> </Button>
          <Button onClick={actionClick} icon={<SavedIcon />} iconPosition='right' className='sm:hidden !w-[70%] text-[12px] !font-normal !py-[12px]'><span className='basket-hidden-iphone'> {t("basket")}</span> </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard