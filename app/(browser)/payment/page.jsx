import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const PaymentPage = () => {
  return (
    <section className='flex  justify-center px-20 h-screen'>
     <article className='w-2/3 mt-5 '>
        <div className='flex items-center justify-between gap-10 mb-5'>
            <p className='w-1/2 text-center text-xl font-bold bg-blue-500 text-white  py-2 rounded-lg'>Adres Bilgileri</p>
            <p className='w-1/2 text-center text-xl font-bold bg-blue-500 text-white  py-2 rounded-lg'>Ödeme Bilgileri</p>
        </div>
        <div>
            <button className='bg-[#ff8000] text-white font-semibold px-4 py-2 rounded-lg'>Yeni Adres +</button>
            {/* card */}
            <div className='w-1/2 mt-5 flex flex-col gap-2 bg-white border rounded-lg  shadow-lg'>
            {/* card header */}
                <div className='flex items-center justify-between border-b border-[#ff8000] pb-2 pt-2 px-4'>
                    <p>UserName</p>
                    <div className='flex items-center gap-2'>
                    <button className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                         <CiEdit />
                        Düzenle</button>
                        <button className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                        <MdDelete />
                        Sil</button>
                    </div>
                </div>
                {/* card body */}
                <div className='p-2'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus?</p>
                    <p className='text-sm text-gray-500 mt-4'>0555 555 55 55</p>
                </div>
                {/* card footer */}
                <div className='flex items-center justify-between pt-2 px-2 mb-3'>
                    <div className='flex items-center gap-2 border p-2 rounded-lg'>
                    <input className='cursor-pointer' id='checkbox' type="checkbox" />
                    <label htmlFor="checkbox" className='text-sm cursor-pointer'>Teslimat için kullan</label>
                    </div>
                    <div className='flex items-center gap-2 border p-2 rounded-lg'>
                    <input className='cursor-pointer' id='checkbox2' type="checkbox" />
                    <label htmlFor="checkbox2" className='text-sm cursor-pointer'>Fatura için kullan</label>
                    </div>
                </div>
            </div>
        </div>
     </article>
     <article className='w-1/3'></article>
    </section>
  )
}

export default PaymentPage