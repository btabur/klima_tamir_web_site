'use client'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (path) => {
        router.push(path)
    }

    const isActive = (path) => pathname === path

    return (
        <section className='w-1/6 h-[calc(100vh-68px)] bg-slate-500'>
            <ul className='text-white text-xl font-bold'>
                {[
                    { path: '/admin/dashboard', label: 'Genel Görünüm' },
                    { path: '/admin/category', label: 'Kategori' },
                    { path: '/admin/products', label: 'Ürün' },
                    { path: '/admin/order', label: 'Sipariş' },
                    { path: '/admin/settings', label: 'Ayarlar' },
                ].map(({ path, label }) => (
                    <li
                        key={path}
                        onClick={() => handleClick(path)}
                        className={`p-3 hover:bg-slate-400 cursor-pointer ${
                            isActive(path) ? 'bg-blue-500' : ''
                        }`}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Menu