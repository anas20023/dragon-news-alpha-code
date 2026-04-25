'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const NavLink = ({ href, children,className }) => {
    const pathname=usePathname()
    return (
        <Link className={`${className} ${pathname===href?'border-b-2 border-sky-500':''}`} href={href}>{children}</Link>
    )
}

export default NavLink
