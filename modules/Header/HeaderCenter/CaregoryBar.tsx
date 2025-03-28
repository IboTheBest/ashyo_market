"use client";
import { Context } from "@/context/context";
import { IMG_API } from "@/hooks/getEnv";
import getCategory from "@/service/GetRequests/getCategory";
import { CategoryType } from "@/types/CategoriesType";
import Image from "next/image";
import React, { MouseEvent, useContext, useState } from "react";
import { ClearIcon } from "@/assets/icons";

const CaregoryBar = () => {
  const { openCategory, setOpenCategory } = useContext(Context);

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).id === "backdrop") {
      setOpenCategory(false);
    }
  }

  const { data: category } = getCategory();
  const [hoverCategory, setHoverCategory] = useState<number | null>(null);
  const [subCategory, setSubCategory] = useState<CategoryType>();

  function handleCategoryHover(obj: CategoryType) {
    setHoverCategory(obj.id);
    setSubCategory(obj);
  }

  return (
    <div
      id="backdrop"
      onClick={handleClick}
      className={`fixed inset-0 z-50 bg-[#00000090] flex md:items-center md:justify-center transition-all duration-500 ease-out ${openCategory ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
      <div
        className={`relative flex containers !p-0 md:w-[800px] md:max-w-[900px] h-screen md:h-[570px] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 ease-out ${openCategory ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <button
          onClick={() => setOpenCategory(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
        >
          <ClearIcon />
        </button>

        <div className="w-[40%] md:w-[35%] bg-[#EBEFF3] h-full md:h-[570px] py-4 md:py-[43px] px-3 md:px-[32px]">
          {category?.map((item: CategoryType) => (
            <button
              onMouseEnter={() => handleCategoryHover(item)}
              key={item.id}
              className={`w-full flex gap-2 text-start p-[12px] ${hoverCategory === item.id ? "bg-[#134E9B] text-white" : ""
                }`}
            >
              <Image
                className="max-w-[24px] hidden md:block w-auto h-auto max-h-[24px] object-contain"
                src={`${IMG_API}/${item.icon}`}
                alt="icon"
                width={24}
                height={24}
                priority
              />
              <span className="line-clamp-1 md:line-clamp-none">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="w-[60%] md:w-[65%] bg-white h-full md:h-[570px] py-[55px] px-[40px]">
          <strong>{subCategory?.name}</strong>
          <div className="flex flex-col">
            {subCategory?.subCategories?.map((item: CategoryType) => (
              <span key={item.id} className="text-[#545D6A] text-[14px] leading-[19px]">
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregoryBar;