import React, { useState } from 'react'
import {Link} from 'gatsby'
import { HiOutlineMenuAlt3 } from "@react-icons/all-files/hi/HiOutlineMenuAlt3";

const NavBar = () => {
    const navContainer = `
    md:flex
    justify-between
    shadow-lg
    rounded-sm
    bg-white
    items-center
    sticky
    top-0
    z-20
    bg-opacity-50
    `
    const navStyles = `
    md:static
    fixed
    bottom-0
    top-12
    md:flex
    md:space-x-7
    items-center
    md:bg-transparent
    bg-red-500
    bg-opacity-50
    md:w-auto
    w-10/12
    md:text-gray-500
    md:space-y-0
    space-y-5
    p-2
    transition-left
    duration-1000
    `
    const linkStyle = `
    text-zinc-500
    hover:text-zinc-800
    `

    const [ showNav, setShowNav ] = useState(false);

    return (
            <nav className={navContainer}>
                <div className="flex items-center justify-between">
                <a href="/">
                    Logo
                </a>
                    <HiOutlineMenuAlt3 onClick={() => setShowNav(!showNav)} className="md:hidden block w-10 h-10 p-2 cursor-pointer"/>
                </div>
                <ul className={(showNav ? "left-0 " : "-left-full ") + navStyles}>
                    <li className={linkStyle}><Link to="/about">about</Link></li>
                    <li className={linkStyle}><Link to="/projects">projects</Link></li>
                    <li className={linkStyle}><Link to="/blog">blog</Link></li>
                    <li className={linkStyle}><Link to="/hobbies">hobbies</Link></li>
                </ul>
            </nav>
    )
}

export default NavBar
