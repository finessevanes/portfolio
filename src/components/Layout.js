import React from 'react'
import {Link} from 'gatsby'
import { HiOutlineMenuAlt3 } from "@react-icons/all-files/hi/HiOutlineMenuAlt3";


const Layout = ({children}) => {
    const navbarStyles = `
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
    text-white
    md:space-y-0
    space-y-5
    p-2
    `
    const fullNavbarStyle = `
    flex
    justify-end
    shadow-md
    w-full
    pt-4
    pb-4
    `
    const linkStyle = `
    text-zinc-500
    hover:text-zinc-800
    `
    const footerStyle = `
    text-center
    py-8
    text-slate-50
    bg-gradient-to-tl
    from-purple-300
    via-red-200
    to-purple-300
    `

    return (
        <div>
            <nav className="md:flex justify-between items-center bg-white sticky top-0 z-20">
                <div className="flex items-center justify-between">
                <a href="/">
                    Logo<HiOutlineMenuAlt3 />
                </a>
                <HiOutlineMenuAlt3 />
                </div>
                <ul className={navbarStyles}>
                    <li className={linkStyle}><Link to="/about">about</Link></li>
                    <li className={linkStyle}><Link to="/projects">projects</Link></li>
                    <li className={linkStyle}><Link to="/blog">blog</Link></li>
                    <li className={linkStyle}><Link to="/hobbies">hobbies</Link></li>
                </ul>
            </nav>

            <main>{children}</main>
            <footer className={footerStyle}>
                <p>THIS IS THE FOOTER</p>
            </footer>
        </div>
    )
}

export default Layout
