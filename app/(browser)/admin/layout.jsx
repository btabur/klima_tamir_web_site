import React from 'react'
import TopHeader from '../../components/TopHeader'

export default function AdminLayout({ children }) {
    return (
        <main className="admin-layout">
            <TopHeader />
            <h1 className='text-black text-2xl font-bold'>Admin Panel</h1>
            {children}
        </main>
    );
}