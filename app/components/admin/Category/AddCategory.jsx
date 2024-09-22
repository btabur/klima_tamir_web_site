"use client"
import React, { useState } from 'react'
import Image from 'next/image'; // Image bileşenini import edin
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddCategory = () => {
    const [imageInput, setImageInput] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null)
    const [categoryName, setCategoryName] = useState('')
    const [image, setImage] = useState(null)
    const handleUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageInput(file)
            const fileReader = new FileReader()
            fileReader.onload = function(e) {
                setImage(e.target.result)
            }
            fileReader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
      
        if (!imageInput) {
            setError('Please select an image first')
            return
        }
        if (!categoryName.trim()) {
            setError('Please enter a category name')
            return
        }
        setError(null)
        const formData = new FormData()
        formData.append('file', imageInput)
        formData.append('categoryName', categoryName)
        
        try {
            // Upload image
            const uploadResponse = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })

            if (!uploadResponse.ok) {
                const errorText = await uploadResponse.text()
                throw new Error(`HTTP error! status: ${uploadResponse.status}, message: ${errorText}`)
            }
            const uploadResult = await uploadResponse.json()
            const imageUrl = uploadResult.imageUrl

            // Send category data to /api/category
            const categoryResponse = await fetch('/api/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name:categoryName, image:imageUrl }),
            })
            if (!categoryResponse.ok) {
                const errorText = await categoryResponse.text()
                throw new Error(`HTTP error! status: ${categoryResponse.status}, message: ${errorText}`)
            }

            const categoryResult = await categoryResponse.json()
            console.log('Category created:', categoryResult)

            setImageUrl(imageUrl)
            setCategoryName('')
            setImage(null)
            setImageInput(null)
            // Optionally, you can add a success message state here
            // setSuccessMessage('Category added successfully!')
        } catch (error) {
            console.error('Error:', error)
            setError(`Operation failed: ${error.message}`)
        }
    }
  
    return (
        <section className='text-black px-20 flex justify-center items-top gap-5'>
            <article className='w-1/3'>
            <h1 className='text-2xl font-bold'>Kategori Ekle</h1>
            <form className='flex flex-col gap-3 w-1/2 mt-5' onSubmit={handleSubmit}>
                <div>
                    <label className='cursor-pointer  border border-gray-300 rounded-md p-2' htmlFor="file"> Kategori için resim seç</label>
                    <input className='hidden' id='file' type="file" onChange={handleUpload} accept="image/*" />
                </div>
                <div>
                    <input onChange={(e) => setCategoryName(e.target.value)} className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Kategori adı' />
                </div>
                 
                <button className='bg-red-600 text-white p-2 rounded-md w-32' type='submit'>Kaydet</button>
            </form>
            </article>

            {image && <div className=' h-40 relative flex flex-col items-center justify-center'>
                <button onClick={() => setImage(null)} className='absolute top-5 text-2xl border-2 border-gray-300 right-0 bg-white rounded-full '>
                <IoIosCloseCircleOutline />
                </button>
                    <p>Kategori resmi</p>
                    <Image 
                        src={image} 
                        alt='Selected category image' 
                        width={100} 
                        height={100} 
                        className='w-40 h-40'
                    />
            
            </div>}

        </section>
    )
}

export default AddCategory