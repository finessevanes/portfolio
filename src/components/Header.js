import React from 'react'
import HeaderImage from "../images/header.jpeg";

const Header = () => {
    return (
        <section class="w-full h-screen relative">
            <img src={HeaderImage} className="object-cover w-full h-full absolute" alt="tree-person-walking" />

        </section>

    )
}

export default Header