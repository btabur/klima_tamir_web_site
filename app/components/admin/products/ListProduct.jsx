"use client"
import Image from 'next/image'
import React, { useEffect, useState, useCallback } from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";

const ListProduct = ({products, setProducts, setUpdateId, categories}) => {
  const [imageUrl, setImageUrl] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState(products)
  // ürün silme
  const handleDelete = async (id) => {
      
      const response = await fetch(`/api/product?productId=${id}`, {
          method: 'DELETE'
      })
      const result = await response.json()
     
      setImageUrl(result.product.image)
      const filteredProducts = products.filter(product => product._id !== id)
      setProducts(filteredProducts) 
      setFilteredProducts(filteredProducts)
  }
  // resmi silme
  useEffect(()=>{
      if(imageUrl){
          fetch('/api/deleteImage', {
              method: 'DELETE',
              body: JSON.stringify({ imageUrl })
          })
      }
  },[imageUrl])
  // ürün düzenleme
  const handleEdit = (id) => {
      setUpdateId(id)
  }   
 

  // kategoriye göre filtreleme
  useEffect(()=>{
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(product => product.category === selectedCategory)
      setFilteredProducts(filtered)
    }
  }, [selectedCategory, products])

  const getCategoryName = useCallback((categoryId) => {
    const category = categories.find(category => category._id === categoryId)
    return category ? category.name : ''
  }, [categories])

  return (
    <section className='w-full lg:px-20 px-3 mt-10'>
      <div className='flex  gap-3 items-center mb-5 '>
        <p className='text-xl text-black font-semibold'>Filitrele :</p>
        <select className='border  py-2 px-5 text-black  rounded-md'
          onChange={(e) => setSelectedCategory(e.target.value)} 
          value={selectedCategory}
        >
          <option value="all">Tümü</option>
          {categories?.map((category,i)=>(
            <option key={i} value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
      
    <table className="w-full">
       <thead>
         <tr className="bg-slate-500 text-white">
           <th>Ürün İsmi</th> 
           <th className="hidden md:table-cell">Açıklaması</th>
           <th>Resmi</th>
           <th>Fiyatı</th>
           <th className="hidden md:table-cell">Kategori</th>
           <th ></th>
           <th ></th>
         </tr>
       </thead>
       <tbody>
         {filteredProducts.length > 0 ? (
           filteredProducts.map((product,i) => (
             <tr
               key={i}
               className="text-center text-black border-b  odd:bg-slate-300"
             >
               <td className="py-1 lg:text-xl text-sm w-1/5  font-semibold">{product.name}</td>
               <td className='py-1 hidden md:table-cell'>{product.description}</td>
               <td className="py-1  flex justify-center items-center">
                   <Image className='rounded-md shadow-lg w-20 h-20' src={product.image} alt={product.name} width={100} height={100}/>
               </td>
               <td className="py-1 text-xl font-semibold">{product.price} &#x20BA;</td>
                <td className="py-1 px-2 relative hidden md:table-cell ">
                  {getCategoryName(product.category)}
                </td>
               <td className="py-1 px-2 relative  ">
               <RiEdit2Fill onClick={()=>handleEdit(product._id)}
                className='absolute top-[50%] right-[50%] cursor-pointer
                hover:text-blue-500 hover:scale-110 transition-all
                -translate-y-[50%] text-xl'/>
               </td>
               <td className="py-1 px-2 relative">
               <MdDeleteSweep onClick={()=>handleDelete(product._id)}
                className='absolute top-[50%] right-[50%]  -translate-y-[50%] text-xl
               cursor-pointer hover:text-red-500 hover:scale-110 transition-all'/>
               </td>
             </tr>
           ))
         ) : (
           <tr>
              <td colSpan="5" className="text-center py-2 text-black">Seçili kategoride ürün bulunamadı</td>
           </tr>
         )}
       </tbody>
     </table>
   </section>
  )
}

export default ListProduct