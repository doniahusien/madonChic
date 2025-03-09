"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { Autoplay } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomeData } from '@/redux/features/home/homeThunk'
const TrendingProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.home.products);
  const loading = useSelector(state=>state.home.loading)
  const error = useSelector(state=>state.home.error)
  const [category, setCategory] = useState("men");

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  if (loading) return <div className="flex justify-center items-center h-20">
  <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
</div>;

if (error) return (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md">
    <p className="font-semibold">Error:</p>
    <p>{error}</p>
  </div>
);
  return (
    <div className='flex flex-col justify-center text-center items-center gap-2'>
      {/*Header of section */}
      <SectionTitle title="Top Trending Products" description="Pick up for outfit inspiration and must have looks" />

      {/*Button of men and women category */}
      <div className="flex flex-row justify-center items-center gap-5 pt-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={` flex justify-center items-center rounded-full w-32 sm:w-32 md:w-44  py-2  hover:bg-black hover:text-white ${category === "men" ? "bg-black text-white" : "bg-slate-200 text-black"
            }`}
          onClick={() => setCategory("men")}
        >
          Men
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`flex justify-center items-center rounded-full w-32 sm:w-32 md:w-44 py-2  hover:bg-black hover:text-white ${category === "women" ? "bg-black text-white" : "bg-slate-200 text-black"
            }`}
          onClick={() => setCategory("women")}
        >
          Women
        </motion.button>
      </div>

      {/*products of men and women category with swiper */}
      <div className="relative w-full h-[400px] overflow-hidden mt-5 px-5">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          allowTouchMove={false}
        >
          {products[category]?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 280 }}>
              <Link href={`/perview/${item.id}`}>
                <Image
                  src={item.image_1}
                  width={280}
                  height={400}
                  className="h-[350px] rounded-lg  w-auto object-cover"
                  alt="product"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}

export default TrendingProducts