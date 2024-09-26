import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Image from 'next/image';

const AddProduct = ({onProductAdded}) => {
    const [imageInput, setImageInput] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null)
    const [productName, setProductName] = useState('')
    const [image, setImage] = useState(null);
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        const response = await fetch('/api/category')
        const data = await response.json()
        setCategories(data)
    }

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
        if (!productName.trim()) {
            setError('Please enter a product name')
            return
        }
        if (!productPrice.trim()) {
            setError('Please enter a product price')
            return
        }
        if (!productDescription.trim()) {
            setError('Please enter a product description')
            return
        }
        
        setError(null)
        const formData = new FormData()
        formData.append('file', imageInput)
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productDescription', productDescription)
        formData.append('productCategory', productCategory)
        
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
            const productResponse = await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name:productName, image:imageUrl, price:productPrice, description:productDescription, category:productCategory }),
            })
            if (!productResponse.ok) {
                const errorText = await productResponse.text()
                throw new Error(`HTTP error! status: ${productResponse.status}, message: ${errorText}`)
            }

            const productResult = await productResponse.json()
            console.log('Product created:', productResult)

            setImageUrl(imageUrl)
            setProductName('')
            setProductPrice('')
            setProductDescription('')
            setProductCategory('')
            setImage(null)
            setImageInput(null)
            onProductAdded()
        } catch (error) {
            console.error('Error:', error)
            setError(`Operation failed: ${error.message}`)
        }
    }
  return (
    <section className='text-black ml-5 flex flex-col md:flex-row justify-center items-center gap-5 mt-10'>
            <article className='w-full'>
            <h1 className='text-2xl font-bold'>Kategori Ekle</h1>
            <form className='flex flex-col gap-3 w-full mt-5' onSubmit={handleSubmit}>
                <div >
                    <label className='cursor-pointer  border border-gray-300 rounded-md p-2' htmlFor="file"> Ürün için resim seç</label>
                    <input className='hidden' id='file' type="file" onChange={handleUpload} accept="image/*" />
                </div>
                <div>
                    <input onChange={(e) => setProductName(e.target.value)} className='p-2 border w-72 border-gray-300 rounded-md' type="text" placeholder='Ürün adı' />
                </div>
                <div>
                    <input onChange={(e) => setProductPrice(e.target.value)} className='p-2 border w-72 border-gray-300 rounded-md' type="text" placeholder='Ürün fiyatı' />
                </div>
                <div>
                    <textarea    onChange={(e) => setProductDescription(e.target.value)} className='p-2 border w-72 border-gray-300 rounded-md' type="text" placeholder='Ürün açıklaması' />
                </div>
                <div>
                    <select
                        onChange={(e) => setProductCategory(e.target.value)}
                        className='p-2 border border-gray-300 rounded-md w-72'
                        value={productCategory}
                    >
                        <option value="">Kategori seçin</option>
                        {categories?.map((category) => (
                            <option key={category.id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                 
                <button className='bg-red-600 text-white p-2 rounded-md w-32' type='submit'>Kaydet</button>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
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
                        className='md:w-40 md:h-40 h-20 w-20'
                    />
            
            </div>}

        </section>
  )
}

export default AddProduct