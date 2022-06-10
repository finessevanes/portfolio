import React from 'react';
import Typed from 'react-typed';
import {Link} from 'gatsby'
import { BsChevronCompactDown } from "@react-icons/all-files/bs/BsChevronCompactDown";

const Header = () => {
    return (
        <>
            <section className="w-full relative flex h-full items-center flex-col">
                <Typed
                    className="text-5xl mt-72 text-center font-lato md:mt-96 text-gray-700"
                    strings={['hi, my name is vanessa']}
                    typeSpeed={100}
                />
                <Link to="/about" className='flex items-center mt-96 animate-showDiv'>learn more <span className='ml-3'><BsChevronCompactDown /></span></Link>
            </section>
        </>
    )
}

export default Header