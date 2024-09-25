"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { IoIosCloseCircleOutline } from "react-icons/io";

const  UpdateCategory = ({updateId, setUpdateId, setIsUpdated, onCategoryAdded}) => {
    const [imageInput, setImageInput] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [categoryName, setCategoryName] = useState('');
    const [isImageDeleted, setIsImageDeleted] = useState(false);
   
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch(`/api/category?categoryId=${updateId}`)
            const data = await response.json()
            setCategoryName(data.name)
            setImageUrl(data.image)
            setImage(data.image)
        }
        fetchCategory()
    }, [updateId])

    const handleUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageInput(file)
            const fileReader = new FileReader()
            fileReader.onload = function(e) {
                setImage(e.target.result)
            }
            fileReader.readAsDataURL(file)
            setIsImageDeleted(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!categoryName.trim()) {
            setError('Please enter a category name')
            return
        }
        setError(null)
        
        try {
            let newImageUrl = imageUrl;

            if (imageInput) {
                const formData = new FormData()
                formData.append('file', imageInput)
                
                // Upload new image
                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                })

                if (!uploadResponse.ok) {
                    const errorText = await uploadResponse.text()
                    throw new Error(`HTTP error! status: ${uploadResponse.status}, message: ${errorText}`)
                }
                const uploadResult = await uploadResponse.json()
                newImageUrl = uploadResult.imageUrl;
            }

            // Send category data to /api/category
            const categoryResponse = await fetch('/api/category', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    categoryId: updateId, 
                    newName: categoryName, 
                    newImage: isImageDeleted ? null : newImageUrl
                }),
            })
            if (!categoryResponse.ok) {
                const errorText = await categoryResponse.text()
                throw new Error(`HTTP error! status: ${categoryResponse.status}, message: ${errorText}`)
            }

            // If a new image was uploaded, delete the old one
            if (imageInput && imageUrl && !isImageDeleted) {
                await fetch('/api/deleteImage', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ imageUrl: imageUrl }),
                });
            }

            setImageUrl(newImageUrl)
            setImage(newImageUrl)
            onCategoryAdded();
            setIsUpdated(true);
            setUpdateId(null)
        } catch (error) {
            console.error('Error:', error)
            setError(`Operation failed: ${error.message}`)
        }
    }

    
    
    return (
        <section className='text-black ml-5 flex flex-col md:flex-row justify-center items-top gap-5 mt-10'>
            <article className='md:w-1/2 w-full'>
                <h1 className='text-2xl font-bold'>Kategori Güncelle</h1>
                <form className='flex flex-col gap-3 w-1/2 mt-5' onSubmit={handleSubmit}>
                    <div>
                        <label className='cursor-pointer border border-gray-300 rounded-md p-2' htmlFor="file"> Kategori için resim seç</label>
                        <input className='hidden' id='file' type="file" onChange={handleUpload} accept="image/*" />
                    </div>
                    <div>
                        <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Kategori adı' />
                    </div>
                    <button className='bg-red-600 text-white p-2 rounded-md w-32' type='submit'>Güncelle</button>
                    <p className='text-red-600'>{error}</p>
                </form>
            </article>

            {image && !isImageDeleted && (
                <div className='h-40 relative flex flex-col items-center justify-center'>
                  
                    <p>Kategori resmi</p>
                    <Image 
                        src={image} 
                        alt='Selected category image' 
                        width={100} 
                        height={100} 
                        className='w-40 h-40'
                    />
                </div>
            )}
        </section>
    )
}

export default UpdateCategory