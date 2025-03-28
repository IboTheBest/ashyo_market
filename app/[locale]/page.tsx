import Brands from "@/modules/Brands";
import Category from "@/modules/Category";
import Headphone from "@/modules/Headphone";
import Hero from "@/modules/Hero";
import Products from "@/modules/Products";
import DiscountProduct from "@/modules/Products/DiscountProducts";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Products")
  return (
    <>
        <Hero/>
        <Brands/>
        <Products title={t("title")}/>
        <Products title={t("title")} className="hidden md:block"/>
        <Products title={t("title")} className="hidden md:block"/>
        <Category/>
        <DiscountProduct title={t("discount")}/>
        <Headphone/>
        <Products title={t("title")} className="hidden md:block"/>
    </>
  );
}
