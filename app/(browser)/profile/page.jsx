'use client'
import React, { useEffect, useState } from 'react'
import { useBasketContext } from '../../context/BasketContext';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { CiLogout } from "react-icons/ci";
import { useRouter } from 'next/navigation';
const ProfilPage = () => {
    const [active, setActive] = useState('Sepetim');
    const { state, setState } = useBasketContext();
    const [user, setUser] = useState(null);
    const router = useRouter()

    const userId = localStorage.getItem("Klima_Tamir_userId");
    useEffect(()=>{
        const fetchUser = async () => {
            if (!userId) return;
      
            try {
              const response = await fetch(`/api/users?userId=${userId}`);
              if (!response.ok) {
                throw new Error("Kullanıcı bilgileri alınamadı");
              }
              const data = await response.json();
              setUser(data);
            } catch (error) {
              console.error("Kullanıcı bilgileri alınamadı:", error);
            }
          };
      
          fetchUser();
     
    },[userId])
    const handleDeleteFromBasket = (item) => {
        const updatedBasket = state.basket.filter((basketItem) => basketItem._id !== item._id);
        setState({ ...state, basket: updatedBasket });
    };
    const handleLogOut = () => {
        localStorage.removeItem('Klima_Tamir_userId')
        // Çıkış yapıldığında bir event yayınlayalım
        window.dispatchEvent(new Event('userLoggedOut'))
        router.push('/')
    }
    const handleAddToBasket = (item) => {
        setState((prevState) => ({
            ...prevState,
            basket: prevState.basket.map(basketItem => 
                basketItem._id === item._id 
                ? { ...basketItem, piece: basketItem.piece +1  } 
                : basketItem
            )
        }))
      }
      const handleRemoveFromBasket = (item) => {
        if(item.piece > 1){
        setState((prevState) => ({
            ...prevState,
            basket: prevState.basket.map(basketItem => 
                basketItem._id === item._id 
                ? { ...basketItem, piece: basketItem.piece - 1 } 
                : basketItem
            )
        }))
    }
      }

      const handlePayment = () => {
        if(localStorage.getItem('Klima_Tamir_userId')){
          router.push('/payment')
        }else{
          router.push('/login')
        }
      }
  return (
    <section className='flex text-black px-20 items-start justify-start h-screen'>
       <article className='w-1/6 pl-5 flex flex-col items-start justify-start h-screen '>
        <p className='mt-5 border py-2 pl-2 pr-16  rounded-lg'>{user?.username}</p>
        <div className='flex flex-col items-start justify-start mt-5 border    rounded-lg '>
            <button onClick={()=>setActive('Sepetim')} className={`border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-gray-500 hover:text-white
               ${active=='Sepetim' ? 'bg-blue-500 text-white rounded-tl-lg rounded-tr-lg' : ''}`}>Sepetim</button>
            <button onClick={()=>setActive('Siparişlerim')} className={`border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-gray-500 hover:text-white 
              ${active=='Siparişlerim' ? 'bg-blue-500 text-white' : ''}`}>Siparişlerim</button>
            <button onClick={()=>setActive('Adreslerim')} className={`border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-gray-500 hover:text-white 
              ${active=='Adreslerim' ? 'bg-blue-500 text-white ' : ''}`}>Adreslerim</button>
            <button onClick={()=>setActive('Ayarlar')} className={`border-b py-2 cursor-pointer pl-2 pr-16 w-full hover:bg-gray-500 hover:text-white 
              ${active=='Ayarlar' ? 'bg-blue-500 text-white ' : ''}`}>Ayarlar</button>
            <button
            onClick={()=>handleLogOut()}
             className='border-b py-2 cursor-pointer text-xl font-semibold text-center  px-8 w-full hover:bg-gray-500 hover:text-white'>
            <CiLogout className='w-full'/>
            </button>
        </div>
       </article>
       <article className='w-5/6 flex flex-col mt-5 items-start justify-start h-screen ' >
            <div className='w-full flex flex-col items-center justify-start'>
                <h2 className='text-2xl font-bold border-b-2 border-blue-500 pl-3 w-full'>{
                 active}</h2>
                    <div className='w-full px-10'>
                            {active === 'Sepetim' && state.basket.length > 0 && state.basket.map((item) => (
                            <div key={item.id} className='flex justify-between items-center border-b text-black border-gray-200 py-2'>
                                <p className='text-sm font-bold w-20'>{item.name}</p>

                                <Image className='w-20 h-20' src={item.image} alt={item.name} width={100} height={100} />
                               
                                <div className='flex items-center gap-2  '>
                                    <button 
                                    className='bg-blue-500 text-white   py-1 px-2 rounded-md'
                                    onClick={() => {
                                        handleAddToBasket(item)
                                    }}>+</button>
                                    <p>{item.piece}</p>
                                    <button 
                                    className='bg-red-500 text-white  py-1 px-2 rounded-md'
                                    onClick={() => {
                                        handleRemoveFromBasket(item)
                                    }}>-</button>
                             </div>
                       
                            <p>{item.price * item.piece} TL</p>
                                <button onClick={() => {
                                handleDeleteFromBasket(item)
                                }}><MdDelete />
                                </button>
                            </div>
                            
                        ))}
                        {state.basket.length > 0 && <div className='flex justify-between items-center p-4 text-black'>
                            <p><b>Toplam Fiyat:</b> {state.basket.reduce((acc, item) => acc + item.price * item.piece, 0)} TL</p>
                            <button onClick={()=>handlePayment()} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Ödeme Yap</button>
                        </div>}
                        {active === 'Siparişlerim' && <div className='w-full h-full flex items-center justify-center'>
                            <p>Siparişlerim</p>
                            </div>}
                        {active === 'Adreslerim' && <p>Adreslerim</p>}
                        {active === 'Ayarlar' && <p>Ayarlar</p>}    
                    </div>
            </div>
       </article>
    </section>
  )
}

export default ProfilPage