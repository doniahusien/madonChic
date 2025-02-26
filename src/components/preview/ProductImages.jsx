"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductImages = ({ images }) => {
    const swiperRef = useRef(null);

    return (
        <div className=" w-1/2 md:w-1/2 lg:w-2/3 flex flex-row flex-wrap gap-4 bg-gray-500">
            {/* Desktop Images */}
            <div className="hidden md:flex flex-wrap justify-start gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-[190px] lg:w-[370px]">
                        <Image
                            className="object-cover"
                            src={image}
                            alt="product"
                            width={400}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Swiper */}
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="w-full block md:hidden"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <Image
                            className="rounded-lg object-cover block md:hidden"
                            src={image}
                            alt="product"
                            width={300}
                            height={400}
                            layout="responsive"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductImages;

