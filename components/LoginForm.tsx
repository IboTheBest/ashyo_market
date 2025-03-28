"use client"
import { useRouter } from '@/i18n/navigation';
import useLoginUser from '@/service/PostRequests/postLoginUser';
import { LoginUserType } from '@/types/LoginUserType';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const LoginForm = () => {
    const t = useTranslations();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const { mutate } = useLoginUser()

    function handleLoginSubmit(e: any) {
        e.preventDefault()
        const data: LoginUserType = {
            email, password
        }
        mutate(data, {
            onSuccess: (response) => {
                localStorage.setItem("user", JSON.stringify(response.data))
                router.push("/")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }
        });
    }


   

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="px-[16px] py-[20px] sm:p-[24px]">
                <h2 className="text-[18px] font-medium text-gray-900">{t('login.title')}</h2>
                <p className="mt-[4px] text-[14px] text-gray-600">{t('login.subtitle')}</p>
            </div>
            <form onSubmit={handleLoginSubmit} autoComplete='off'>
                <div className="px-[16px] py-[20px] sm:p-[24px]">
                    <div className="space-y-[16px]">
                        <div>
                            <label className="block text-[14px] font-medium text-gray-700">
                                <span>{t('login.email')}</span>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="mt-[4px] block w-full rounded-md border border-gray-300 px-[12px] py-[8px] shadow-sm focus:border-[#134E9B] focus:outline-none focus:ring-1 focus:ring-[#134E9B] sm:text-[14px]" placeholder={t('login.emailPlaceholder')} />
                            </label>
                        </div>
                        <div>
                            <label className="block text-[14px] font-medium text-gray-700">
                                <span>{t('login.password')}</span>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder={t('login.passwordPlaceholder')} autoComplete="current-password" required className="mt-[4px] block w-full rounded-md border border-gray-300 px-[12px] py-[8px] shadow-sm focus:border-[#134E9B] focus:outline-none focus:ring-1 focus:ring-[#134E9B] sm:text-[14px]" />
                            </label>
                            <div className="flex justify-end mt-[4px]">
                                <a href="/forgot-password" className="text-[12px] font-medium text-[#134E9B] hover:underline">{t('login.forgotPassword')}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-[16px] py-[16px] sm:px-[24px]">
                    <button type="submit" className="w-full rounded-md bg-[#134E9B] px-[16px] py-[8px] text-[14px] font-medium text-white shadow-sm hover:bg-[#0F3C78] focus:outline-none focus:ring-2 focus:ring-[#134E9B] focus:ring-offset-2">
                        {t('login.submit')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;