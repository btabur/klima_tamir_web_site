"use client"
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';
import { menuItems } from '../utilis/menuItems';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <section className='md:hidden relative bg-[#326eb1] py-2 flex flex-col justify-between items-center px-5'>
        <div className=' w-full flex items-center justify-between'>
        <article className='flex items-center gap-2'>
            <div className='flex items-center'>
                <p className='text-black text-xl w-10 h-10 flex items-center justify-center bg-[#ffcc00] font-semibold
                rounded-full'>7</p>
                <p className='text-white -ml-3 text-xl w-12 h-12 flex items-center justify-center bg-[#ef3b3b] font-semibold
                rounded-full'>24</p>
                <p className='text-white text-xl ml-2 font-semibold'>Servis</p>
            </div>
        </article>
        <article className='flex items-center gap-2'>
            <p className='text-white  border-2 border-white px-4 py-1 
            rounded-md hover:bg-white hover:text-black transition-all cursor-pointer'>Kurumsal</p>
              <button onClick={()=>setMenuOpen(!menuOpen)}>
              <IoIosMenu className='text-4xl border-2 border-white rounded-md bg-white text-black  p-1 cursor-pointer' />
              </button>
        </article>
        </div>
   
          <div className={`absolute bg-[#326eb1] left-0 w-full transition-all duration-300 ${menuOpen ? 'top-16' : 'top-[-600px]'}`}>
            <ul className='flex flex-col justify-start text-white'>
                {menuItems.map(({ href, label }) => (
                    <li key={href} className={`font-semibold border-b pl-4 py-1 
                    hover:bg-[#2289bb] transition-all duration-300 
                    ${pathname === href ? 'bg-[#2289bb]' : ''}`}>
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>
          </div>
        
      
       
    </section>
  )
}

export default TopMenu