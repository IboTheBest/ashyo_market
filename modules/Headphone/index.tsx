import Image from 'next/image'
import React from 'react'

const Headphone = () => {
  return (
    <section className='py-[100px]'>
      <div className='containers flex items-center  bg-[#282828] h-[420px]'>
        <Image className='max-w-[518px] hidden sm:block max-h-[493px] object-contain' src={"/Headphone.png"} alt='headphone' width={518} height={493} priority />
        <div className='max-w-[433px] flex flex-col text-center items-center sm:text-start sm:items-start'>
          <span className='text-[32px] inline-block font-bolder leading-[100%px] text-white'>Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</span>
          <button className='text-[16px] leading-[120%] text-[#111111] rounded-[6px] bg-white py-[19px] w-[161px]'>Batafsil</button>
        </div>
      </div>
    </section>
  )
}

export default Headphone