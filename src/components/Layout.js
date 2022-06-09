import React from 'react'
import NavBar from './NavBar'


const Layout = ({children}) => {
    const footerStyle = `
    text-center
    py-8
    text-slate-50
    `

    return (
        <div className='
        bg-gradient-to-tl
        from-purple-300
        via-red-200
        to-purple-300'>
            {/* <NavBar /> */}
            <main className='h-screen'>{children}</main>
            <footer className={footerStyle}>
                <p>THIS IS THE FOOTER</p>
            </footer>
        </div>
    )
}

export default Layout
