import React from 'react'
import { useBasketContext } from '../context/BasketContext'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Basket = () => {
  const { state, setState } = useBasketContext()
  const router = useRouter()
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
  const handleDeleteFromBasket = (item) => {
    setState((prevState) => ({
        ...prevState,
        basket: prevState.basket.filter((basketItem) => basketItem.name !== item.name)
    }))
  }
  const handlePayment = () => {
    if(localStorage.getItem('Klima_Tamir_userId')){
      router.push('/payment')
    }else{
      router.push('/login')
    }
  }
  return (
    <section className='fixed top-18 left-0 w-full rounded-lg shadow-lg  min-h-screen z-50 bg-black/50 text-black flex justify-center'>
        <article className='bg-white w-full max-w-md max-h-[80vh] overflow-y-auto rounded-lg'>
            <header className='flex justify-between items-center px-4 py-2 bg-blue-700 text-white font-semibold'>
                <h3 className='text-lg font-bold'>Sepetim</h3>
                <button className='text-3xl' onClick={() => {
                    setState((prevState) => ({...prevState, isShowBasketModal: false}))
                }}>
                    <IoIosCloseCircleOutline />
                </button>
            </header>
            <div className='p-4'>
                {state.basket.map((item) => (
                    <div key={item.id} className='flex justify-between items-center border-b text-black border-gray-200 py-2'>
                        <p className='text-sm font-bold w-20'>{item.name}</p>

                        <Image className='w-10 h-10' src={item.image} alt={item.name} width={100} height={100} />
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
                {state.basket.length === 0 && <p>Sepetinizde ürün yok</p>}
               
            </div>
          {state.basket.length > 0 && <div className='flex justify-between items-center p-4 text-black'>
                <p><b>Toplam Fiyat:</b> {state.basket.reduce((acc, item) => acc + item.price * item.piece, 0)} TL</p>
                <button onClick={()=>handlePayment()} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Ödeme Yap</button>
            </div>}
        </article>
    </section>
  )
}

export default Basket