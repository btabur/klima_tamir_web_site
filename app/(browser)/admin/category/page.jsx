'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AddCategory from '../../../components/admin/category/AddCategory'

const CategoryPage = () => {
    const [image, setImage] = useState(null)
   

    const handleDelete = async () => {
        if (!imageUrl) {
            setError('No image URL provided')
            return
        }
        try {
            const response = await fetch('/api/deleteImage', {  
                method: 'DELETE',
                body: JSON.stringify({ imageUrl })
            })
            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
            }
            const result = await response.json()    
            console.log('Delete result:', result)
            setImageUrl(null)
        } catch (error) {
            console.error('Fetch error:', error)
            setError(`Delete failed: ${error.message}`)
        }
    }

    return (
        <section>

            <AddCategory/>
           


           
            <button onClick={handleDelete}>Delete</button>
        </section>
    )
}

export default CategoryPage