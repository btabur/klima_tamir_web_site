import React from 'react'
import TopHeader from '../../components/TopHeader'
import Menu from '../../components/admin/Menu'
export default function AdminLayout({ children }) {
    return (
        <main className="admin-layout ">
            <TopHeader />
            <section  className='flex'>     
                    <Menu/>
                    {children}
            </section>
               
        </main>
    );
}