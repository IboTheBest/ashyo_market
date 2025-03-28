"use client"
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { RegisterUserType } from '@/types/RegisterUserType';
import useRegisterUser from '@/service/PostRequests/postNewUser';
import { useRouter } from '@/i18n/navigation';

const RegisterForm = () => {
    const t = useTranslations("register")

    const [email, setEmail] = useState("")
    const [fullname, setName] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const { mutate } = useRegisterUser();

    function handleRegisterSubmit(e: any) {
        e.preventDefault()
        const data: RegisterUserType = {
            email, fullname, password
        }
        mutate(data, {
            onSuccess: (res) => {
                router.push("/login")
            }
        })


    }

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="px-[16px] py-[20px] sm:p-[24px]">
                <h2 className="text-[18px] font-medium text-gray-900">{t('title')}</h2>
                <p className="mt-[4px] text-[14px] text-gray-600">{t('subtitle')}</p>
            </div>
            <form onSubmit={handleRegisterSubmit}>
                <div className="px-[16px] py-[20px] sm:p-[24px]">
                    <div className="space-y-[16px]">
                        <div>
                            <label className="block text-[14px] font-medium text-gray-700">
                                <span>{t('username')}</span>
                                <input onChange={(e) => setName(e.target.value)} type="text" autoComplete="username" required className="mt-[4px] block w-full rounded-md border border-gray-300 px-[12px] py-[8px] shadow-sm focus:border-[#134E9B] focus:outline-none focus:ring-1 focus:ring-[#134E9B] sm:text-[14px]" placeholder={t('usernamePlaceholder')} />
                            </label>
                        </div>
                        <div>
                            <label className="block text-[14px] font-medium text-gray-700">
                                <span>{t('email')}</span>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="mt-[4px] block w-full rounded-md border border-gray-300 px-[12px] py-[8px] shadow-sm focus:border-[#134E9B] focus:outline-none focus:ring-1 focus:ring-[#134E9B] sm:text-[14px]" placeholder={t('emailPlaceholder')} />
                            </label>
                        </div>
                        <div>
                            <label className="block text-[14px] font-medium text-gray-700">
                                <span>{t('password')}</span>
                                <input minLength={8} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="new-password" required className="mt-[4px] block w-full rounded-md border border-gray-300 px-[12px] py-[8px] shadow-sm focus:border-[#134E9B] focus:outline-none focus:ring-1 focus:ring-[#134E9B] sm:text-[14px]" placeholder={t('passwordPlaceholder')} />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 px-[16px] py-[16px] sm:px-[24px]">
                    <button type="submit" className="w-full rounded-md bg-[#134E9B] px-[16px] py-[8px] text-[14px] font-medium text-white shadow-sm hover:bg-[#0F3C78] focus:outline-none focus:ring-2 focus:ring-[#134E9B] focus:ring-offset-2">
                        {t('submit')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;