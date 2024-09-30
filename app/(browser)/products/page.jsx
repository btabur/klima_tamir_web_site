"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    axios.get('/api/product')
    .then(res => {
      setProducts(res.data)
    })
    axios.get('/api/category')
    .then(res => {
      setCategories(res.data)
    })
  }, []);
   // kategoriye göre filtreleme
   useEffect(()=>{
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(product => product.category === selectedCategory)
      setFilteredProducts(filtered)
    }
  }, [selectedCategory, products])
  const handleAddToCart = (product) => {
    console.log(product)
  }
  // todo : sepete ekleme işlemi yapılacak
  return (
    <section className="text-black px-20  pt-10 bg-gray-100 min-h-screen">
        <div className='flex  gap-3 items-center mb-5 '>
        <p className='text-xl text-black font-semibold'> Kategoriye göre filitrele :</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div className='bg-white rounded-md p-2 shadow-lg flex flex-col items-center justify-center gap-3' key={product._id}>
            <p className='text-center text-2xl font-bold'>{product.name}</p>
            <Image className='w-64 h-64 object-cover rounded-md'
             src={product.image} alt={product.name} width={100} height={100} />
             <p className='text-center text-xl font-light'>{product.description}</p>
            <p className='text-center text-xl font-bold'>{product.price} TL</p>
            <button onClick={()=>handleAddToCart(product)}
             className='bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600'>
            <MdOutlineShoppingCart />
               Sepete ekle</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage