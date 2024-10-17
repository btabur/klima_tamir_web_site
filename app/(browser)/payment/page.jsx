"use client"
import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import AddAdress from '../../components/adress/AddAdress'
import UpdateAdress from '../../components/adress/UpdateAdress'
import axios from 'axios';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useBasketContext } from '../../context/BasketContext';
const PaymentPage = () => {
    const { state, setState } = useBasketContext();
    const [isShowAddAdressModal,setIsShowAddAdressModal]= useState(false)
    const [isShowUpdateAdressModal,setIsShowupdateAdressModal]= useState(false)

    const [adresss, setAdresss] = useState([])
    const [userId,setUserId]=useState(null)
    const [isGetAdress,setIsGetAdress] =useState(false)
    const [user,setUser]=useState(null)
    const [isShowPayment,setIsShowPayment]=useState(false)
    const [updateAdres,setUpdateAdres]=useState(null)
    const [totalBasket,setTotalBasket]=useState(0)
    const [selectedAdres,setSelectedAdres]=useState(null)

    useEffect(()=> {
        const user = localStorage.getItem('Klima_Tamir_userId')
        setUserId(user) 
     
    },[])

    useEffect(()=> {
            if(userId) {
                axios.get(`/api/adress?userId=${userId}`)
                .then(res => {
                  setAdresss(res.data);
                })
                axios.get(`/api/users?userId=${userId}`)
                .then((res)=> setUser(res.data))
            }
    },[userId])
    useEffect(()=> {
        if(userId){
            axios.get(`/api/adress?userId=${userId}`)
            .then(res => {
              setAdresss(res.data);
            })
        }
      
    },[isGetAdress])

    const handleDelete = (id)=> {
        axios.delete(`/api/adress?adressId=${id}`)
        .then(()=> {
            toast.success('Adres Silindi')
            setAdresss((prev)=> prev.filter((adres)=> adres._id !==id))
        })
        .catch((e)=>toast.error('Silerken bir hata meydana geldi'+e))
    }
useEffect(()=> {
    let total=0;
        if(state.basket) {
            state.basket.map((item)=> {
                total+= item.piece*item.price
            })
        }
        setTotalBasket(total)
},[state])
 console.log(selectedAdres);
 
    
  return (
    <section className='flex flex-col lg:flex-row  justify-center px-20 h-screen relative'>
    { <article className='lg:w-2/3 w-full mt-80 lg:mt-5 '>
        <div className='flex items-center justify-between gap-10 mb-5'>
            <p className={`w-1/2 text-center text-xl font-bold ${!isShowPayment ? 'bg-blue-500 text-white ' :'text-black bg-slate-300'} py-2 rounded-lg`}>Adres Bilgileri</p>
            <p className={`w-1/2 text-center text-xl font-bold ${isShowPayment ? 'bg-blue-500 text-white ' :'text-black bg-slate-300'}   py-2 rounded-lg`}>Ödeme Bilgileri</p>
        </div>
        {/* Adres Kısmı */}
      {!isShowPayment &&  <div className='flex flex-col w-full'>
            <button onClick={()=> setIsShowAddAdressModal(true)}
             className=' w-72 bg-[#ff8000] text-white font-semibold px-4 py-2 rounded-lg'>Yeni Adres +</button>
            {/* card */}
            <div  className='w-full  grid lg:grid-cols-2  grid-cols-1'>
            {adresss && adresss.map(adres => (
                <div key={adres._id} className='ml-3 mt-5 flex flex-col gap-2 bg-white text-black border rounded-lg shadow-lg'>
                    {/* card header */}
                    <div className='flex items-center justify-between border-b border-[#ff8000] pb-2 pt-2 px-4'>
                        <p>{adres.name}</p>
                        <div className='flex items-center gap-2'>
                            <button onClick={() => {
                                setIsShowupdateAdressModal(true);
                                setUpdateAdres(adres);
                            }} className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                                <CiEdit />
                                Düzenle
                            </button>
                            <button onClick={() => handleDelete(adres._id)}
                                    className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                                <MdDelete />
                                Sil
                            </button>
                        </div>
                    </div>
                    {/* card body */}
                    <div className='p-2'>
                        <p>{adres.description}</p>
                        <p>{adres.mah}</p>
                        <p>{adres.city}/{adres.town}</p>
                        <p className='text-sm text-gray-500 mt-4'>{adres.phone}</p>
                    </div>
                    {/* card footer */}
                    <div className='flex items-center justify-between pt-2 px-2 mb-3'>
                        <div className='flex items-center gap-2 border p-2 rounded-lg'>
                            <input 
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedAdres(adres);  // Update the selected address
                                    } else {
                                        setSelectedAdres(null);  // Clear if unchecked
                                    }
                                }} 
                                className='cursor-pointer' 
                                id={adres._id} 
                                type="checkbox" 
                                checked={selectedAdres?._id === adres._id} // Check only if this is the selected address
                            />
                            <label htmlFor={adres._id} className='text-sm cursor-pointer'>Bu adresi Kullan</label>
                        </div>
                    </div>
                </div>
            ))}


            </div>
         
        </div>}
        {/* Ödeme Kısmı */}
       {isShowPayment && <div className='w-full rounded-lg shadow-lg text-black px-10 '>
                <h3 className='text-xl border-b border-[#ff8000]'>Ödeme Kısmı</h3>
                <div className='mt-5 flex items-center gap-2 bg-slate-200 py-2 px-4 rounded-lg'>
                    <input type="checkbox" id='form' />
                    <label className='cursor-pointer' htmlFor="form"> 
                    Ön Bilgilendirme Formunu ve Mesafeli Satış Sözleşmesini okudum, onaylıyorum</label>
                </div>


        </div>}

     </article>}
     <article className='flex lg:w-1/3 w-full flex-col gap-3 ml-5 px-10 items-center mt-5 text-black'>
        <div className='flex flex-col items-center w-full gap-3 bg-white p-5 shadow-lg border rounded-lg'>
             <h3 className='text-xl border-b w-full text-center border-[#ff8000] font-semibold' >Sipariş Özeti</h3>   
             {state.basket && state.basket.map((item)=>(
                <div className='flex justify-around w-full m-4 shadow-xl py-2 px-4'>
                    <Image width={500} height={500}
                    alt='sepet'
                    src={state.basket[0]?.image}
                    className='w-32 h-32'
                     />
                     <div className='flex flex-col items-start'>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='text-sm'>{item.description}</p>
                        <p className='font-semibold mt-5'>{item.price*item.piece} TL</p>
                     </div>

                </div>
             ))}
           
                
        </div>
        <div className='shadow-xl w-full border rounded-lg flex items-center justify-between py-2 px-4'>
               <p className='font-semibold'> Sepet Toplam :</p>
               <p>{totalBasket} TL</p>
             </div>
        <button onClick={()=>setIsShowPayment(true)}
        className='w-full bg-[#ff8000] text-white font-semibold py-2 rounded-lg'>Ödeme Adımına Geç</button>
     </article>
     {/* modal add basket */}
     {isShowAddAdressModal && <AddAdress adresss={adresss} setIsGetAdress={setIsGetAdress} setIsShowAddAdressModal={setIsShowAddAdressModal}/>}
     {isShowUpdateAdressModal && <UpdateAdress updateAdres={updateAdres} setIsGetAdress={setIsGetAdress} setIsShowupdateAdressModal={setIsShowupdateAdressModal}/>}
    </section>
  )
}

export default PaymentPage


// [
//     {
//         "_id": "66fd7d0c81d5e8cfe8eaeb63",
//         "name": "Ürün 2",
//         "image": "/uploads/1727888652391-443655739-ürün 2.jpeg",
//         "description": "Ürün açıklama 2",
//         "price": 2000,
//         "category": "66fd7c7f81d5e8cfe8eaeb57",
//         "__v": 0,
//         "piece": 1
//     }
// ]