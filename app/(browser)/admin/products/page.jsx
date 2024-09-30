'use client'
import React, { useEffect, useState } from 'react'
import AddProduct from '../../../components/admin/products/AddProduct'
import ListProduct from '../../../components/admin/products/ListProduct'
import UpdateProduct from '../../../components/admin/products/UpdateProduct'
const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [updateId, setUpdateId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [categories, setCategories] = useState([])
  const fetchProducts = async () => {
      const response = await fetch('/api/product')
      const data = await response.json()
      setProducts(data)
  }

  useEffect(() => {
      fetchProducts()
  }, [isUpdated])

   // kategori listesi
   useEffect(()=>{
    fetch('/api/category')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])
  return (
    <section className='w-full'>
      {updateId ? 
      <UpdateProduct categories={categories} onProductAdded={fetchProducts} updateId={updateId} setUpdateId={setUpdateId} setIsUpdated={setIsUpdated} /> 
      :<AddProduct categories={categories} onProductAdded={fetchProducts} />}
      <ListProduct categories={categories} setUpdateId={setUpdateId} products={products} setProducts={setProducts} />     
    </section>
  )
}

export default ProductsPage