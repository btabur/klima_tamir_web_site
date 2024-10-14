"use client"
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddAdress = ({setIsShowAddAdressModal,setAdresss,adresss}) => {
  // Form verilerini tutmak için state tanımlayın
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    address: '',
    phone: ''
  });
  const [userId,setUserId]=useState(null)
  useEffect(()=> {
    const user = localStorage.getItem('Klima_Tamir_userId')
      setUserId(user)
  },[])

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
              city:formData.city, 
              town:formData.district,
              description:formData.address,
              phone:formData.phone,
              userId:userId }),
        }).then(()=> {
          toast.success('Adres Kaydedildi');
          setIsShowAddAdressModal(false);
          setAdresss(prev => [...prev, { 
            city: formData.city, 
            town: formData.district, 
            description: formData.address, 
            phone: formData.phone, 
            userId: userId 
          }]); 
          
         
        })
      }else {
        toast.info('En fazla üç adres girebilirsiniz')
      }
    
   
  };

  return (
    <section className='absolute top-0 left-0 w-full h-screen bg-slate-400 bg-opacity-50 flex items-start justify-center'>
        <div className='relative flex flex-col items-center w-1/3 min-w-96 bg-white rounded-lg mt-10 min-h-72 px-10 pt-5'>
              <button onClick={()=> setIsShowAddAdressModal(false)}
               className='absolute top-2 right-2 text-black text-3xl cursor-pointer'>
              <IoMdCloseCircleOutline />
              </button>
            <h2 className='text-xl w-1/2 shadow-lg text-center rounded-lg font-semibold  mb-3 bg-[#ff8000] text-white'>Adres Ekle</h2>
            <form className='flex flex-col items-start gap-3 lg:px-10 text-black w-full' onSubmit={handleSubmit}>
              <input className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="city" placeholder='Şehir' onChange={handleChange} />
              <input className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="district" placeholder='İlçe' onChange={handleChange} />
              <input className='border border-black w-full py-2 pl-2 rounded-lg' type="text" name="address" placeholder='Adres' onChange={handleChange} />
              <input className='border border-black w-full py-2 pl-2 rounded-lg' type="phone" name="phone" placeholder='Telefon' onChange={handleChange} />
              <button type='sumbit' className='mb-5 border py-2 px-4 shadow-xl rounded-lg bg-[#ff8000] text-white font-semibold'>Kaydet</button>
            </form>
        </div>
    </section>
  )
}

export default AddAdress