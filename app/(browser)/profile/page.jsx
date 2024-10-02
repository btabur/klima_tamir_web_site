'use client'
import React, { useState } from 'react'
import { useBasketContext } from '../../context/BasketContext';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
const ProfilPage = () => {
    const [active, setActive] = useState('Sepetim');
    const { state, setState } = useBasketContext()




  return (
    <section className='flex text-black px-20 items-start justify-start h-screen'>
       <article className='w-1/6 pl-5 flex flex-col items-start justify-start h-screen '>
        <p className='mt-5 border py-2 pl-2 pr-16  rounded-lg'>UserName</p>
        <div className='flex flex-col items-start justify-start mt-5 border    rounded-lg '>
            <p className='border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-blue-500 hover:text-white'>Sepetim</p>
            <p className='border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-blue-500 hover:text-white'>Siparişlerim</p>
            <p className='border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-blue-500 hover:text-white'>Adreslerim</p>
            <p className='border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-blue-500 hover:text-white'>Ayarlar</p>
        </div>
       </article>
       <article className='w-5/6 flex flex-col mt-5 items-start justify-start h-screen ' >
            <div className='w-full flex flex-col items-center justify-start'>
                <h2 className='text-2xl font-bold border-b-2 border-blue-500 pl-3 w-full'>Sepetim</h2>
                    <div className='w-full px-10'>
                            {state.basket.map((item) => (
                            <div key={item.id} className='flex justify-between items-center border-b text-black border-gray-200 py-2'>
                                <p className='text-sm font-bold w-20'>{item.name}</p>

                                <Image className='w-20 h-20' src={item.image} alt={item.name} width={100} height={100} />
                               
                                <p>{item.piece}</p>
                       
                            <p>{item.price * item.piece} TL</p>
                                <button onClick={() => {
                                handleDeleteFromBasket(item)
                                }}><MdDelete />
                                </button>
                            </div>
                            
                        ))}
                    </div>
            </div>
       </article>
    </section>
  )
}

export default ProfilPage