"use client"
import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { fetchHomeData } from '@/redux/features/home/homeThunk'
import { useDispatch,useSelector } from 'react-redux'
const RatedProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.home);
    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);
    
   /* const rated = [
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
    ]*/
    return (
        <div className='flex flex-col justify-center text-center items-center gap-2'>
            {/*Header of section */}
            <SectionTitle title="Top Rated Products" description="The highest-rated product with exceptional customer satisfaction." />
            <div className='flex flex-row justify-center items-center gap-3 p-4 w-full flex-wrap'>
                {products.top_rated?.map((item, index) => (
                    <div key={index} className=' transition-transform duration-500 ease-in-out  hover:scale-105  w-[200px] h-[250px] relative overflow-hidden rounded-lg'>
                        <Link href="/">
                            <Image
                                src={item.image_1}
                                fill
                                alt="item rated"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </Link>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default RatedProducts