"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e)   => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.ok) {
        router.push("/login");
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='flex justify-center gap-10 mt-10'>
      <section className=' flex justify-center items-start '>
          <Image src="/register.jpg" alt="logo" width={312} height={485}
          className='h-96 rounded-lg' />
      </section>
      <section className=' flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold text-black mb-10'>Kayıt Ol</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input type="text" placeholder='Kullanıcı Adı' value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 rounded-md w-96 border text-black  ' />
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-md w-96 border text-black  ' />
          <input type="password" placeholder='Şifre' value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md w-96 border text-black  ' />
          <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Kayıt Ol</button>
        </form>
        <p className='text-sm text-black mt-5'>Zaten bir hesabın var mı? <Link href="/login" className='text-blue-500'  >Giriş Yap</Link></p>
      </section>
    </main>
  )
}

export default Register