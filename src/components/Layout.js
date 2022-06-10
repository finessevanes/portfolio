import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'


const Layout = ({children}) => {
    const [ showNav, setShowNav ] = useState(true);

    useEffect(() =>{
        if (window.location.pathname === '/'){
            setShowNav(false);
        }
    }, [])

    return (
        <div className='
        bg-gradient-to-tl
        from-purple-300
        via-red-200
        to-purple-300'>
            {showNav && (
                <NavBar/>
            )}
            <main className='h-screen'>{children}</main>
        </div>
    )
}

export default Layout
