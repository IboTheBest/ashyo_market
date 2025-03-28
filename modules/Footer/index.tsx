"use client";

import type React from "react";
import { Send } from "lucide-react";
import { FacebookIcon, TwitterIcon, YoutubeIcon, TelegramIcon } from "@/assets/icons";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="px-4 py-8 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-700">{t("socialMedia")}</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="rounded-md flex items-center justify-center bg-gray-100 p-3 transition-colors hover:bg-gray-200"><FacebookIcon /><span className="sr-only">Facebook</span></Link>
              <Link href="#" className="rounded-md flex items-center justify-center bg-gray-100 p-3 transition-colors hover:bg-gray-200"><YoutubeIcon /><span className="sr-only">YouTube</span></Link>
              <Link href="#" className="rounded-md flex items-center justify-center bg-gray-100 p-3 transition-colors hover:bg-gray-200"><TelegramIcon /><span className="sr-only">YouTube</span></Link>
              <Link href="#" className="rounded-md flex items-center justify-center bg-gray-100 p-3 transition-colors hover:bg-gray-200"><TwitterIcon /><span className="sr-only">Twitter</span></Link>
              <Link href="#" className="rounded-md flex items-center justify-center bg-gray-100 p-3 transition-colors hover:bg-gray-200"><GrInstagram /><span className="sr-only">Instagram</span></Link>
            </div>

            <h3 className="mt-8 text-lg font-medium text-gray-700">{t("downloadApp")}</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-block">
                <div className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200">
                  <FaAppStore /> <span className="text-sm font-medium">App Store</span>
                </div>
              </Link>
              <Link href="#" className="inline-block">
                <div className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200">
                  <FaGooglePlay /><span className="text-sm font-medium">Google Play</span>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">{t("menu")}</h3>
            <nav className="mt-4 flex flex-col space-y-3">
              <Link href="#" className="text-gray-600 transition-colors hover:text-gray-900">{t("aboutProduct")}</Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-gray-900">{t("termsOfUse")}</Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-gray-900">{t("privacyPolicy")}</Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-gray-900">{t("returnPolicy")}</Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-gray-900">{t("contactUs")}</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700">{t("contacts")}</h3>
            <p className="mt-2 text-xl font-bold">{t("phoneNumber")}</p>
            <div className="mt-6">
              <h4 className="text-base font-medium text-gray-700">{t("haveQuestion")}</h4>
              <form className="mt-2 flex items-center">
                <div className="relative flex-1">
                  <input type="text" placeholder={t("askQuestions")} className="w-full p-4 outline-none rounded-md bg-gray-100 pr-10" />
                  <button type="submit" className="absolute right-0 top-0"><Send className="h-5 w-5" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">{t("copyright")}</div>
      </div>
    </footer>
  );
};

export default Footer;