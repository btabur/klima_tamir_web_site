'use client'
import React, { useEffect, useState } from 'react'
import AddProduct from '../../../components/admin/products/AddProduct'
import ListProduct from '../../../components/admin/products/ListProduct'
import UpdateProduct from '../../../components/admin/products/UpdateProduct'
const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [updateId, setUpdateId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
  }

  useEffect(() => {
      fetchProducts()
  }, [isUpdated])
  return (
    <section className='w-5/6'>
      {updateId ? 
      <UpdateProduct onProductAdded={fetchProducts} updateId={updateId} setUpdateId={setUpdateId} setIsUpdated={setIsUpdated} /> 
      :<AddProduct onProductAdded={fetchProducts} />}
      <ListProduct setUpdateId={setUpdateId} products={products} setProducts={setProducts} />     
    </section>
  )
}

export default ProductsPage