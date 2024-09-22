'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const CategoryPage = () => {
    const [image, setImage] = useState(null)
    const [imageInput, setImageInput] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null)

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
        setError(null)
        const formData = new FormData()
        formData.append('file', imageInput)
        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
            console.log('Fetch response:', response)

            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
            }
            const result = await response.json()
            console.log('Upload result:', result)
            setImageUrl(result.imageUrl)
        } catch (error) {
            console.error('Fetch error:', error)
            setError(`Upload failed: ${error.message}`)
        }
    }

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleUpload} accept="image/*" />
                <button type='submit'>Upload</button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            <div className='mt-10 border h-72'>
                {image && <Image src={image} alt='file' width={100} height={100} />}
            </div>
                {imageUrl && <p>Uploaded image URL: {imageUrl}</p>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CategoryPage