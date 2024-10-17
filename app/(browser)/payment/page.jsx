"use client"
import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import AddAdress from '../../components/adress/AddAdress'
import UpdateAdress from '../../components/adress/UpdateAdress'
import axios from 'axios';
import { toast } from 'react-toastify';
const PaymentPage = () => {
    const [isShowAddAdressModal,setIsShowAddAdressModal]= useState(false)
    const [isShowUpdateAdressModal,setIsShowupdateAdressModal]= useState(false)

    const [adresss, setAdresss] = useState([])
    const [userId,setUserId]=useState(null)
    const [isGetAdress,setIsGetAdress] =useState(false)
    const [user,setUser]=useState(null)
    const [isShowPayment,setIsShowPayment]=useState(false)
    const [updateAdres,setUpdateAdres]=useState(null)
 

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
 
    
  return (
    <section className='flex  justify-center px-20 h-screen relative'>
     <article className='w-2/3 mt-5 '>
        <div className='flex items-center justify-between gap-10 mb-5'>
            <p className={`w-1/2 text-center text-xl font-bold ${!isShowPayment ? 'bg-blue-500 text-white ' :'text-black bg-slate-300'} py-2 rounded-lg`}>Adres Bilgileri</p>
            <p className={`w-1/2 text-center text-xl font-bold ${isShowPayment ? 'bg-blue-500 text-white ' :'text-black bg-slate-300'}   py-2 rounded-lg`}>Ödeme Bilgileri</p>
        </div>
        <div className='flex flex-col w-full'>
            <button onClick={()=> setIsShowAddAdressModal(true)}
             className=' w-72 bg-[#ff8000] text-white font-semibold px-4 py-2 rounded-lg'>Yeni Adres +</button>
            {/* card */}
            <div  className='w-full  grid lg:grid-cols-2  grid-cols-1'>
                {adresss && adresss.map(adres=> (
                       <div key={adres._id} className='ml-3 mt-5 flex flex-col gap-2 bg-white text-black border rounded-lg  shadow-lg'>
                       {/* card header */}
                           <div className='flex items-center justify-between border-b border-[#ff8000] pb-2 pt-2 px-4'>
                           <p>{adres.name}</p>
                               <div className='flex items-center gap-2'>
                               <button onClick={()=>{
                                setIsShowupdateAdressModal(true)
                                setUpdateAdres(adres)
                                }}
                               className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                                    <CiEdit />
                                   Düzenle</button>
                                   <button onClick={()=>handleDelete(adres._id)}
                                    className='flex items-center gap-2 bg-[#f9f9f9] px-2 py-1 rounded-lg text-md'>
                                   <MdDelete />
                                   Sil</button>
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
                               <input className='cursor-pointer' id='checkbox' type="checkbox" />
                               <label htmlFor="checkbox" className='text-sm cursor-pointer'>Teslimat için kullan</label>
                               </div>
                               <div className='flex items-center gap-2 border p-2 rounded-lg'>
                               <input className='cursor-pointer' id='checkbox2' type="checkbox" />
                               <label htmlFor="checkbox2" className='text-sm cursor-pointer'>Fatura için kullan</label>
                               </div>
                           </div>
                       </div>

                ))}

            </div>
         
        </div>
     </article>
     <article className='w-1/3'></article>
     {/* modal add basket */}
     {isShowAddAdressModal && <AddAdress adresss={adresss} setIsGetAdress={setIsGetAdress} setIsShowAddAdressModal={setIsShowAddAdressModal}/>}
     {isShowUpdateAdressModal && <UpdateAdress updateAdres={updateAdres} setIsGetAdress={setIsGetAdress} setIsShowupdateAdressModal={setIsShowupdateAdressModal}/>}
    </section>
  )
}

export default PaymentPage