'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const pathname=usePathname()
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg flex flex-row justify-center items-center">
            <header className="flex max-w-6xl mx-auto w-full  h-16 items-center justify-between px-6">
                <h2>Dragon News</h2>
                <ul className="flex items-center gap-4">
                    <li><Link className={'no-underline'} href="#">Home</Link></li>
                    <li><Link className={'no-underline'} href="#">About</Link></li>
                    <li><Link className={'no-underline'} href="#">Career</Link></li>
                </ul>
                <Link href={pathname==='/register'?'/login':"/register"}><Button>{pathname==='/register'?'Login':"Register"}</Button></Link>
            </header>
        </nav>
    )
}

export default Navbar
