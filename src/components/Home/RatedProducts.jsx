import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
const RatedProducts = () => {
    const rated = [
        {
            src: "/rated1.jpeg",
        }, {
            src: "/rated2.jpeg",
        }, {
            src: "/rated3.jpeg",
        }, {
            src: "/rated4.jpeg",
        }, {
            src: "/rated5.jpeg",
        }, {
            src: "/rated6.jpeg",
        },
    ]
    return (
        <div className='flex flex-col justify-center text-center items-center gap-2'>
            {/*Header of section */}
            <SectionTitle title="Top Rated Products" description="The highest-rated product with exceptional customer satisfaction." />
            <div className='flex flex-row justify-center items-center gap-3 p-4 w-full flex-wrap'>
                {rated.map((item, index) => (
                    <div key={index} className=' transition-transform duration-300 ease-in-out  hover:scale-105  w-[200px] h-[250px] relative overflow-hidden rounded-lg'>
                        <Link href="/">
                            <Image
                                src={item.src}
                                fill
                                alt="item rated"
                                className="object-cover"
                            />
                        </Link>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default RatedProducts