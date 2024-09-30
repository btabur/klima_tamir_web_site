'use client'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { adminMenuItems } from '../../utilis/menuItems'
import { MdBorderAll, MdCategory, MdDashboard, MdProductionQuantityLimits, MdSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";

const Menu = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (path) => {
        router.push(path)
    }

    const isActive = (path) => pathname === path

    return (
        <section className='h-[calc(100vh-72px)] shadow-lg bg-white relative'>
            <ul className='text-white text-xl font-bold'>
                {adminMenuItems.map(({ path, label }) => (
                    <li
                        key={path}
                        onClick={() => handleClick(path)}
                        className={`m-3 p-2 flex items-center text-black gap-2 hover:bg-slate-400 
                            hover:text-white hover:rounded-lg cursor-pointer overflow-hidden 
                            ${
                                isActive(path) ? 'bg-blue-500 rounded-lg text-white' : ''
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            {label === 'Genel Görünüm' ? <MdDashboard /> 
                            : label === 'Kategori' ? <MdCategory /> 
                            : label === 'Ürün' ? <MdProductionQuantityLimits /> 
                            : label === 'Sipariş' ? <MdBorderAll /> 
                            : label === 'Ayarlar' ? <MdSettings /> : ''}
                           {isOpen ? <p className='text-sm'>{label}</p> : ''}
                        </div>
                    </li>
                ))}
            </ul>
                <button onClick={() => setIsOpen(!isOpen)}
                className='hidden md:block absolute bottom-20 right-2 shadow-lg text-2xl text-black border-2 border-black rounded-lg p-2
                hover:bg-slate-400 hover:text-white hover:border-white cursor-pointer overflow-hidden'>
               
                {isOpen ? <IoChevronBack /> : <IoIosArrowForward />}
                
                </button>
           
        </section>
    )
}

export default Menu