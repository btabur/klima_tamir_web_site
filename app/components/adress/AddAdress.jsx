"use client"
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';

const AddAdress = ({setIsShowAddAdressModal,setIsGetAdress,adresss}) => {
  // Form verilerini tutmak için state tanımlayın
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    address: '',
    phone: ''
  });
  const [userId,setUserId]=useState(null)
  const [user,setUser]=useState(null)
  useEffect(()=> {
    const user = localStorage.getItem('Klima_Tamir_userId')
      setUserId(user)
  },[])
  useEffect(()=> {
    if(userId){
      axios.get(`/api/users?userId=${userId}`)
      .then((res)=> setUser(res.data))
    }
  },[userId])

  
  // Form verilerini güncelleyen fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form gönderildiğinde çağrılacak fonksiyon
  const handleSubmit = async(e) => {
    e.preventDefault();
 
    
     
      if(adresss.length<4) {
          // Send category data to /api/category
          await fetch('/api/adress', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              name:formData.name,
              city:formData.city, 
              town:formData.district,
              mah:formData.mah,
              description:formData.address,
              phone:formData.phone,
              userId:userId }),
        }).then(()=> {
          toast.success('Adres Kaydedildi');
          setIsShowAddAdressModal(false);
          setIsGetAdress((prev)=>!prev)
          
         
        })
      }else {
        toast.info('En fazla üç adres girebilirsiniz')
      }
    
   
  };


  return (
    <section className='absolute top-0 left-0 w-full h-screen bg-slate-400 bg-opacity-50 flex items-start justify-center'>
        <div className='relative flex flex-col items-center w-1/2 min-w-96 bg-white rounded-lg mt-10 min-h-72 px-10 pt-5'>
              <button onClick={()=> setIsShowAddAdressModal(false)}
               className='absolute top-2 right-2 text-black text-3xl cursor-pointer'>
              <IoMdCloseCircleOutline />
              </button>
            <h2 className='text-xl w-1/2 shadow-lg text-center rounded-lg font-semibold  mb-3 bg-[#ff8000] text-white'>Adres Ekle</h2>
            <form className='flex flex-col items-start gap-3 lg:px-10 text-black w-full mt-5' onSubmit={handleSubmit}>
              <div className='flex items-center w-full gap-4'>
                <div className='relative w-1/2'>
                  <label htmlFor="name" className='absolute -top-3 px-2 left-6 bg-white' >Ad Soyad <span className='text-red-600 '>*</span> </label>
                <input type="text" id='name' className=' border border-black w-full py-2 pl-2 rounded-lg' name='name' onChange={handleChange}  defaultValue={user?.username} />
                </div>
                <div className='relative w-1/2'>
                  <label className='absolute -top-3 left-6 bg-white px-2' htmlFor="city"> Şehir <span className='text-red-600'>*</span></label>
                  <input id='city' className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="city"  onChange={handleChange} />
                </div>
              </div>
              <div className='flex items-center w-full gap-4 mt-4'>
                <div className='relative w-1/2'>
                  <label htmlFor="name" className='absolute -top-3 px-2 left-6 bg-white' >İlçe <span className='text-red-600 '>*</span> </label>
                  <input className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="district"  onChange={handleChange} />
                </div>
                <div className='relative w-1/2'>
                  <label className='absolute -top-3 left-6 bg-white px-2' htmlFor="mah"> Mahalle <span className='text-red-600'>*</span></label>
                  <input id='mah' className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="mah"  onChange={handleChange} />
                </div>
              </div>
              <div className='flex items-center w-full gap-4 mt-4'>
                <div className='relative w-1/2'>
                    <label className='absolute -top-3 left-6 bg-white px-2' htmlFor="mah"> Adres <span className='text-red-600'>*</span></label>
                    <textarea className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="address" onChange={handleChange} />
                  </div>
                  <div className='relative w-1/2'>
                  <label className='absolute -top-3 left-6 bg-white px-2' htmlFor="mah"> Telefon <span className='text-red-600'>*</span></label>
                  <input className='border border-black w-full py-2 pl-2 rounded-lg' type="phone" name="phone" onChange={handleChange} />
                </div>
                </div>



            
            
              <button type='sumbit' className='mb-5 border py-2 px-4 shadow-xl rounded-lg bg-[#ff8000] text-white font-semibold'>Kaydet</button>
            </form>
        </div>
    </section>
  )
}

export default AddAdress