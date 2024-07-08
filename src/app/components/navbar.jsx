"use client";

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import NavLink from "./navLink";


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48">

            {/* From Medium Device Nav*/}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>


            {/*Logo*/}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">nahin</span>
                    <span className="w-14 h-8 rounded bg-white text-black flex items-center justify-center">.Abrar</span>
                </Link>
            </div>

            {/*Social Icons*/}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="">
                    <Image src="/github.png" alt="gitLogo" width={24} height={24} />
                </Link>
                <Link href="">
                    <Image src="/dribbble.png" alt="gitLogo" width={24} height={24} />
                </Link>
                <Link href="">
                    <Image src="/instagram.png" alt="gitLogo" width={24} height={24} />
                </Link>
                <Link href="">
                    <Image src="/facebook.png" alt="gitLogo" width={24} height={24} />
                </Link>
                <Link href="">
                    <Image src="/pinterest.png" alt="gitLogo" width={24} height={24} />
                </Link>
                <Link href="">
                    <Image src="/linkedin.png" alt="gitLogo" width={24} height={24} />
                </Link>
            </div>

            {/*Responsive Menu*/}
            <div className="md:hidden">

                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    <div className="w-10 h-1 bg-black rounded"></div>

                    <div className="w-6 h-1 bg-black rounded"></div>

                    <div className="w-10 h-1 bg-black rounded"></div>

                </button>

                {/*MENU LIST*/}
                {open && (<div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {links.map((link) => (
                        <NavLink link={link} key={link.title} />
                    ))}

                </div>)
                }


            </div>

        </div>
    )
}

export default Navbar
