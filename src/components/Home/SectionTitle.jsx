import React from 'react'

const SectionTitle = ({ title, description }) => {
    return (
        <>
            <h1 className="relative sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-3">
                <span className="before:content-[''] before:block before:w-16 before:h-[2px] before:bg-red-400"></span>
                {title}
                <span className="after:content-[''] after:block after:w-16 after:h-[2px] after:bg-red-400"></span>
            </h1>
            <p className='text-gray-500'>{description}</p></>
    )
}

export default SectionTitle