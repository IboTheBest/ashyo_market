"use client"
import { AvatarIcon, CompareIcon, LikeIcon, SavedIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { Context } from '@/context/context'
import { useRouter } from '@/i18n/navigation'
import LikedByUser from '@/service/GetRequests/LikedByUser'
import { HeaderActionsType } from '@/types/HeaderType'
import { Modal } from 'antd'
import { useTranslations } from 'next-intl'
import React, { useContext, useState } from 'react'

const HeaderActions = () => {
    const { data } = LikedByUser()
    const { user } = useContext(Context)
    const router = useRouter()
    const t = useTranslations("logout")
    const [openModal, setOpenModal] = useState<boolean>(false)
    

    const actionsList: HeaderActionsType[] = [
        {
            id: 1,
            bage: null,
            icon: <CompareIcon />,
            onClick: handleCompareClick,
            className: "!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id: 2,
            bage: data?.length,
            icon: <LikeIcon />,
            onClick: handleLikedClick,
            className: "!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id: 3,
            bage: null,
            icon: <SavedIcon />,
            onClick: handleSavedClick,
            className: "!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
        {
            id: 4,
            bage: user ? 1 : null,
            icon: <AvatarIcon />,
            onClick: () => !user ? router.push("/login") : setOpenModal(true),
            className: "!bg-[#EBEFF3] !p-0 !w-[50px] !h-[48px] !text-[#545D6A]"
        },
    ]
    function handleCompareClick() {
        if (user) {
            router.push("/coming-soon")
        } else {
            router.push("/login")
        }
    }
    function handleLikedClick() {
        if (user) {
        } else {
            router.push("/login")
        }
    }
    function handleSavedClick() {
        if (user) {
            router.push("/coming-soon")
        } else {
            router.push("/login")
        }
    }
    function handleUserClick() {
        if (user) {
            localStorage.removeItem("user")
            window.location.reload();
            setOpenModal(false)
        }
    }
    return (
        <div className='items-center gap-[15px] hidden sm:flex'>
            <Modal open={openModal} onCancel={() => setOpenModal(false)} onOk={handleUserClick}>
                <h2 className='text-black font-black text-[30px]'>{t("title")}</h2>
            </Modal>
            {actionsList.map((item: HeaderActionsType) => <Button onClick={item.onClick} key={item.id} bage={item.bage} className={item.className}> {item.icon} </Button>)}
        </div>
    )
}

export default HeaderActions

