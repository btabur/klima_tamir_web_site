import React from 'react'
import { useBasketContext } from '../context/BasketContext'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";

const Basket = () => {
  const { state, setState } = useBasketContext()
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
  return (
    <section className='absolute top-0 right-0 w-full h-full z-50 bg-black/50 flex justify-center items-center'>
        <article className='bg-white w-full max-w-md h-full max-h-[95%] overflow-y-auto'>
            <header className='flex justify-between items-center px-4 py-2 bg-gray-200'>
                <h3 className='text-lg font-bold'>Sepetim</h3>
                <button onClick={() => {
                    setState((prevState) => ({...prevState, isShowBasketModal: false}))
                }}>Kapat</button>
            </header>
            <div className='p-4'>
                {state.basket.map((item) => (
                    <div key={item.id} className='flex justify-between items-center border-b border-gray-200 py-2'>
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
                        <button onClick={() => {
                           handleDeleteFromBasket(item)
                        }}><MdDelete />
                        </button>
                    </div>
                ))}
            </div>
            <div className='flex justify-between items-center p-4'>
                <p><b>Toplam Fiyat:</b> {state.basket.reduce((acc, item) => acc + item.price * item.piece, 0)} TL</p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Ödeme Yap</button>
            </div>
        </article>
    </section>
  )
}

export default Basket