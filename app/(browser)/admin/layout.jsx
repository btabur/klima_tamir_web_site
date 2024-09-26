"use client"
import React, { useState, useEffect } from 'react'
import TopHeader from '../../components/TopHeader'
import Menu from '../../components/admin/Menu'
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetchUser(userId);
        } else {
            router.push('/login');
        }
    }, []);

    const fetchUser = async (userId) => {
        try {
            const response = await fetch(`/api/users?userId=${userId}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Kullanıcı bilgileri alınamadı:', error);
            router.push('/login');
        }
    }

    useEffect(() => {
        if (user) {
            if (user.role !== 'admin') {
                router.push('/login');
            }
        }
    }, [user, router]);

    if (!user) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <main className="admin-layout ">
            <TopHeader />
            <section className='flex'>     
                <Menu />
                {children}
            </section>
        </main>
    );
}