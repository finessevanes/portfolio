import React from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';


const Header = () => {

    return (
        <section className="w-full relative flex h-full justify-center items-center">
                <Typed
                    className="text-5xl font-lato text-gray-700"
                    strings={['hi, my name is vanessa', 'i am a front end developer']}
                    typeSpeed={100}
                    loop
                />
        </section>

    )
}

export default Header