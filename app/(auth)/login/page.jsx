"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
        // Giriş başarılı, kullanıcıyı yönlendirin
        console.log(data.user.role);
       if(data.user.role === 'admin') {
        toast.success('Giriş başarılı');
        localStorage.setItem('Klima_Tamir_userId', data.user._id);
        router.push('/admin/dashboard');
       }else if(data.user.role === 'user'){
        localStorage.setItem('Klima_Tamir_userId', data.user._id);
        toast.success('Giriş başarılı');
        router.push('/');
       }
       else{
        localStorage.setItem('Klima_Tamir_isAuth', false);
     
       toast.error('Yetkisiz giriş denemesi');
       }
       
    } else {
        // Giriş başarısız, hata mesajını gösterin
        toast.error(data.message);
    }
};

  return (
    <main className='flex justify-center gap-10 mt-10'>
      <section className=' flex justify-center items-start '>
          <Image src="/register.jpg" alt="logo" width={312} height={485}
          className='h-96 rounded-lg' />
      </section>
      <section className=' flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-black mb-10'>Giriş Yap</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md w-96 border text-black  ' />
          <input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md w-96 border text-black  ' />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Giriş Yap</button>
        </form>
        <p className='text-sm text-black mt-5'>Hesabın yok mu? <Link href="/register" className='text-blue-500'  >Kayıt Ol</Link></p>
    
      </section>
    </main>
  )
}

export default Login