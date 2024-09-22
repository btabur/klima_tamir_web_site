import React from 'react'
import TopHeader from '../../components/TopHeader'

export default function AdminLayout({ children }) {
    return (
        <div className="admin-layout">
            <TopHeader />
            <h1>Admin Panel</h1>
            {children}
        </div>
    );
}