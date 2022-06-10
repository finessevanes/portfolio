import React from 'react'
import Typed from 'react-typed';

const Projects = () => {
    const projectCard = `
    flex
    bg-white
    h-96 w-70
    bg-opacity-50
    shadow-2xl
    rounded-md
    mt-8
    justify-center
    flecol
    `
    return (
        <div className="text-center py-24 w-4/5 mx-auto font-lato">
                <Typed
                    className="text-6xl mt-72 text-center  md:mt-96 text-gray-700"
                    strings={['projects']}
                    typeSpeed={100}
                />
            <div>
                <div className={projectCard}>
                    <img className='pt-4 object-contain h-48 w-96 md:h-64' src="https://gateway.pinata.cloud/ipfs/Qmbar9F8gEAggURc5Eyp6hUYQb49u1SjS39EBAMjNPcenQ" />
                    <h2>buildspace hackathon</h2>
                    <p>built on top of the original wave portal, Slam Poetry checks to see if you are an existing buildspace nft holder. If you are, you are able to </p>

                </div>
            </div>
        </div>
    )
}

export default Projects
