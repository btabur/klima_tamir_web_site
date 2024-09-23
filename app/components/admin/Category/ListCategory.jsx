"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";

const ListCategory = ({categories,setCategories,setUpdateId}) => {
    const [imageUrl, setImageUrl] = useState(null)
  
    const handleDelete = async (id) => {
        
        const response = await fetch(`/api/category?categoryId=${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()
       
        setImageUrl(result.category.image)
        const filteredCategories = categories.filter(category => category._id !== id)
        setCategories(filteredCategories)
    }

    useEffect(()=>{
        if(imageUrl){
            fetch('/api/deleteImage', {
                method: 'DELETE',
                body: JSON.stringify({ imageUrl })
            })
        }
    },[imageUrl])

    const handleEdit = (id) => {
        setUpdateId(id)
    }   
  return (
    <section className='w-full px-20 mt-10'>
     <table className="w-full">
        <thead>
          <tr className="bg-slate-500 text-white">
            <th>Kategori İsmi</th>
            <th>Resmi</th>
            <th >Güncelle</th>
            <th >Sil</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category,i) => (
              <tr
                key={i}
                className="text-center text-black border-b  odd:bg-slate-300"
              >
                <td className="py-1 text-xl font-semibold">{category.name}</td>
                <td className="py-1  flex justify-center items-center">
                    <Image src={category.image} alt={category.name} width={100} height={100}/>
                </td>
    
                <td className="py-1  relative ">
                <RiEdit2Fill onClick={()=>handleEdit(category._id)}
                 className='absolute top-[50%] right-[50%] cursor-pointer
                 hover:text-blue-500 hover:scale-110 transition-all
                 -translate-y-[50%] text-xl'/>
                </td>
                <td className="py-1 relative">
                <MdDeleteSweep onClick={()=>handleDelete(category._id)}
                 className='absolute top-[50%] right-[50%]  -translate-y-[50%] text-xl
                cursor-pointer hover:text-red-500 hover:scale-110 transition-all'/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-2 text-black">Herhangi bir kategori eklenmedi</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default ListCategory