import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const RootLayout = () => {
    return (
        <section className='h-dvh overflow-auto'>
            <NavBar />
            <Outlet />
        </section>
    )
}

export default RootLayout