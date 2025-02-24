"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    { mobile: "/headermobile.png", desktop: "/headerfirst.png" },
    { mobile: "/headermobile2.png", desktop: "/headersecond.png" },
    { mobile: "/headermobile3.png", desktop: "/headerthird.png" },
];

const Header = () => {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full h-[400px]">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                className="w-full h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img.desktop}
                            alt={`Slide ${index + 1}`}
                            className="hidden md:block w-full h-full object-cover"
                        />
                        <img
                            src={img.mobile}
                            alt={`Mobile Slide ${index + 1}`}
                            className="block md:hidden w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="custom-prev absolute top-1/2 left-4 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-600 transition -translate-y-1/2">
                <ArrowLeft />
            </button>
            <button className="custom-next absolute top-1/2 right-4 z-10 bg-black text-white p-3 rounded-full hover:bg-gray-600 transition -translate-y-1/2">
                <ArrowRight />
            </button>
        </div>
    );
};

export default Header;
