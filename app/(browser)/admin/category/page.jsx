'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AddCategory from '../../../components/admin/category/AddCategory'
import ListCategory from '../../../components/admin/category/ListCategory'
import UpdateCategory from '../../../components/admin/Category/UpdateCategory'
const CategoryPage = () => {
    const [categories, setCategories] = useState([])
    const [updateId, setUpdateId] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);

    const fetchCategories = async () => {
        const response = await fetch('/api/category')
        const data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        fetchCategories()
    }, [isUpdated])

  

    return (
        <section className='w-5/6'>
            {updateId ? 
            <UpdateCategory onCategoryAdded={fetchCategories} updateId={updateId} setUpdateId={setUpdateId} setIsUpdated={setIsUpdated} /> 
            :<AddCategory onCategoryAdded={fetchCategories} />}
            <ListCategory setUpdateId={setUpdateId} categories={categories} setCategories={setCategories} />     
        </section>
    )
}

export default CategoryPage