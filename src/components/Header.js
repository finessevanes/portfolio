import React from 'react';
import Typed from 'react-typed';
import {Link} from 'gatsby'
import { BsChevronCompactDown } from "@react-icons/all-files/bs/BsChevronCompactDown";

const Header = () => {
    return (
        <>
            <section className="w-full relative flex h-full items-center flex-col font-lato">
                <Typed
                    className="text-6xl mt-72 text-center  md:mt-96 text-gray-700"
                    strings={['hi, my name is vanessa']}
                    typeSpeed={100}
                />
                <p className='mt-24 text-xl'>I'm a frontend engineer & web3 content creator 👽</p>
                <Link to="/projects" className='flex items-center mt-96 animate-showDiv'>learn more<span className='ml-2'><BsChevronCompactDown /></span></Link>
            </section>
        </>
    )
}

export default Header