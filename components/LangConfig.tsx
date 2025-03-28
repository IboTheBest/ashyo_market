"use client"
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { ArrowDownIcon } from '@/assets/icons';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { getCookie } from "cookies-next/client";

const LangConfig = () => {
    const [lang, setLang] = useState<"uz" | "ru" | "en" | any>("uz")
    const router = useRouter();
    const pathname = usePathname();

    function changeLang(value: "uz" | "ru" | "en") {
        setLang(value)
        router.push(pathname, { locale: value });
    }
    useEffect(() => {
        const locale = getCookie("NEXT_LOCALE");
        if (locale === "uz" || locale === "ru" || locale === "en") {
            setLang(locale);
        }
    }, []);
    return (
        <Popover placement="bottom">
            <PopoverTrigger >
                <div className="flex items-center gap-[7px]">
                    <span className="text-[14px] font-semibold text-[#545D6A] cursor-pointer capitalize">{lang}</span>
                    <ArrowDownIcon />
                </div>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-2 cursor-pointer bg-[#134E9B] rounded-md overflow-hidden">
                    <div onClick={() => changeLang("ru")} className="text-[14px] hover:bg-white rounded-md font-semibold text-white px-5 hover:text-[#134E9B]">ru</div>
                    <div onClick={() => changeLang("en")} className="text-[14px] hover:bg-white rounded-md font-semibold text-white px-5 hover:text-[#134E9B]">en</div>
                    <div onClick={() => changeLang("uz")} className="text-[14px] hover:bg-white rounded-md font-semibold text-white px-5 hover:text-[#134E9B]">uz</div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default LangConfig