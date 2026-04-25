import Navbar from '@/components/shared/Navbar'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <section>
            <Navbar />
            {children}
        </section>
    )
}

export default AuthLayout
