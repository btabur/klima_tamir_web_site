"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';

const UpdateProduct = ({updateId, setUpdateId, setIsUpdated, onProductAdded, categories}) => {
  const [imageInput, setImageInput] = useState(null);
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [isImageDeleted, setIsImageDeleted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
        const response = await fetch(`/api/product?productId=${updateId}`)
        const data = await response.json()
        setProductName(data.name)
        setProductDescription(data.description)
        setProductPrice(data.price)
        setProductCategory(data.category)
        setImageUrl(data.image)
        setImage(data.image)
    }
    fetchProduct()
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
    if (!productName.trim()) {
        setError('Please enter a product name')
        return
    }
    if (!productDescription.trim()) {
        setError('Please enter a product description')
        return
    }
    if (productPrice==0) {
        setError('Please enter a product price')
        return
    }
    if (!productCategory.trim()) {
        setError('Please enter a product category')
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

        // Send product data to /api/product
        const productResponse = await fetch(`/api/product`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: updateId, 
                newName: productName, 
                newDescription: productDescription,
                newPrice: productPrice,
                newCategory: productCategory,
                newImage: isImageDeleted ? null : newImageUrl
            }),
        })
        if (!productResponse.ok) {
            const errorText = await productResponse.text()
            throw new Error(`HTTP error! status: ${productResponse.status}, message: ${errorText}`)
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
        onProductAdded();
        setIsUpdated(true);
        setUpdateId(null)
    } catch (error) {
        console.error('Error:', error)
        setError(`Operation failed: ${error.message}`)
    }
}

const getCategoryName = useCallback((categoryId) => {
  const category = categories.find(category => category._id === categoryId)
  return category ? category.name : ''
}, [categories])

  return (
    <section className='text-black ml-20 flex flex-col md:flex-row items-top gap-5 mt-10'>
            <article className='mr-10 w-72'>
                <h1 className='text-2xl font-bold'>Ürün Güncelle</h1>
                <form className='flex flex-col gap-3  mt-5' onSubmit={handleSubmit}>
                    <div>
                        <label className='cursor-pointer border border-gray-300 rounded-md p-2' htmlFor="file"> Ürün için resim seç</label>
                        <input className='hidden' id='file' type="file" onChange={handleUpload} accept="image/*" />
                    </div>
                    <div>
                        <input value={productName} onChange={(e) => setProductName(e.target.value)} className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Kategori adı' />
                    </div>
                    <div>
                    <textarea    onChange={(e) => setProductDescription(e.target.value)} className='p-2 border w-72 border-gray-300 rounded-md' type="text" value={productDescription} />
                </div>
                    <div>
                        <input value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className='p-2 border border-gray-300 rounded-md' type="text" placeholder='Kategori adı' />
                    </div>
                    <div>
                       <select 
                       value={productCategory}
                        className='p-2 border border-gray-300 rounded-md px-10 text-black '
                        onChange={(e) => setProductCategory(e.target.value)}
                       >
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                       </select>
                    </div>
                    <button className='bg-blue-600 text-white p-2 rounded-md w-32' type='submit'>Güncelle</button>
                    <p className='text-red-600'>{error}</p>
                </form>
            </article>

            {image && !isImageDeleted && (
                <div className='h-40 relative flex flex-col items-center justify-center'>
                  
                    <p className='text-xl font-bold '>Ürün resmi</p>
                    <Image 
                        src={image} 
                        alt='Selected category image' 
                        width={100} 
                        height={100} 
                        className='w-40 h-40 rounded-lg shadow-lg'
                    />
                </div>
            )}
        </section>
  )
}

export default UpdateProduct