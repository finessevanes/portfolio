import React from 'react'
import {Link} from 'gatsby'

const Layout = ({children}) => {
    const navbarStyle = `
    flex
    justify-end
    shadow-md
    w-full
    pt-4
    pb-4
    `
    const linkStyle = `
    mr-8
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
            <nav className="rounded-lg">
                <ul className={navbarStyle}>
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
