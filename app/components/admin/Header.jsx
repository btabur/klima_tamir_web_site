import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const pathname = usePathname()
  const isActive = (path) => pathname === path  
  const router = useRouter()
  return (
    <header className='flex justify-between items-center px-20 py-2 shadow-md bg-white text-black'>
       <article className='flex items-center gap-10 '>
        <div className='flex items-center gap-2'>
          <Link href="/">
            <Image className='w-10 h-10' src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>Klima Tamir</h1>
                <p className='text-sm text-gray-500'>Admin Paneli</p>
            </div>
        </div>
        
        <div className='hidden md:block'>
            <p>{isActive('/admin/dashboard') ? 'Genel Görünüm' : ''}</p>
            <p>{isActive('/admin/category') ? 'Kategori' : ''}</p>
            <p>{isActive('/admin/products') ? 'Ürün' : ''}</p>
            <p>{isActive('/admin/order') ? 'Sipariş' : ''}</p>
            <p>{isActive('/admin/settings') ? 'Ayarlar' : ''}</p>
        </div>
       </article>
      
        <button 
        onClick={() => {
          localStorage.removeItem('Klima_Tamir_userId')
          router.push('/')
        }}
         className='text-2xl'>
        <IoIosLogOut />
        </button>
      
    </header>
  )
}

export default Header