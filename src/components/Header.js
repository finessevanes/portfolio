import React from 'react'
import HeaderImage from "../images/header.jpeg";

const Header = () => {
    return (
        <section class="w-full h-screen">
            <img src={HeaderImage} class="object-cover w-full h-full" alt="tree-person-walking" />

        </section>

    )
}

export default Header