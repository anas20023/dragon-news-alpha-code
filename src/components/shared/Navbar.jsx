import { Button } from "@heroui/react";
import Link from "next/link";  
import NavLink from "./NavLink";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full flex flex-row justify-center items-center">
            <header className="flex max-w-6xl mx-auto w-full  h-16 items-center justify-between px-6">
                <div></div>
                <ul className="flex items-center gap-4">
                    <li><NavLink className={'no-underline'} href="/">Home</NavLink></li>
                    <li><NavLink className={'no-underline'} href="/about">About</NavLink></li>
                    <li><NavLink className={'no-underline'} href="/career">Career</NavLink></li>
                </ul>
                <Link href={'/login'}><Button>Login</Button></Link>
            </header>
        </nav>
    )
}

export default Navbar
