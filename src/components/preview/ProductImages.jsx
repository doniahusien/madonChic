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
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-wrap gap-2 md:gap-4 p-2">
            {/* Desktop Grid View */}
            <div className="hidden w-full md:grid grid-cols-2 lg:grid-cols-2 gap-2">
                {images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden h-[400px] md:h-[400px] lg:h-[550px]">
                        <Image
                            className="object-cover w-full h-full"
                            src={image}
                            alt="product"
                            width={400}
                            height={400}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Swiper View */}
            <div className="md:hidden w-full">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="flex justify-center h-[400px]">
                            <div className="w-full h-full rounded-lg overflow-hidden">
                                <Image
                                    className="object-cover w-full h-full"
                                    src={image}
                                    alt="product"
                                    width={500}
                                    height={400}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductImages;
