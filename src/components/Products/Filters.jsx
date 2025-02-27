"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ListFilterPlusIcon, X } from "lucide-react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filters = ({ categories }) => {
    const [isOpen, setOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2500);
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSliderChange = ([min, max]) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    return (
        <>
            {/* Mobile Filter Button */}
            {!isMdScreen && (
                <div className="flex text-2xl md:hidden p-5 mx-4 shadow-lg bg-white rounded-xl">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex flex-row gap-2 items-center justify-center"
                    >
                        <ListFilterPlusIcon />
                        <span>Filters</span>
                    </button>
                </div>
            )}

          
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: isOpen || isMdScreen ? 0 : "-100%", opacity: isOpen || isMdScreen ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`fixed inset-0 z-50 md:relative w-full md:w-72 bg-white py-3 px-5 rounded-lg shadow-md 
                    ${isOpen || isMdScreen ? "block" : "hidden"}`}
            >
                {/* Header */}
                <div className="flex flex-row pb-5 border-b-2 my-3 justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Filters</h1>
                    {!isMdScreen && (
                        <X 
                            onClick={() => setOpen(false)} 
                            className="cursor-pointer"
                        />
                    )}
                </div>

                {/* Price Filter */}
                <div className="mb-5">
                    <h2 className="text-gray-800 text-lg">Price</h2>
                    <div className="relative py-5">
                        <RangeSlider
                            min={0}
                            max={2500}
                            step={200}
                            value={[minPrice, maxPrice]}
                            onInput={handleSliderChange}
                            className=" cursor-move "
                        />
                    </div>

                    <div className="flex justify-between font-thin text-sm mt-2">
                        <span className="text-gray-700">
                            Min
                            <input
                                readOnly
                                type="number"
                                value={minPrice}
                                className="p-1 rounded-md ml-2 w-16 text-center border border-gray-500"
                            />
                        </span>
                        <span className="text-gray-700">
                            Max
                            <input
                                readOnly
                                type="number"
                                value={maxPrice}
                                className="p-1 rounded-md ml-2 w-16 text-center border border-gray-500"
                            />
                        </span>
                    </div>
                </div>

                {/* Category Filter */}
                <div>
                    <h3 className="text-gray-800 text-lg border-t-2 pt-5">Categories</h3>
                    <ul className="mt-2">
                        {categories.map((item, index) => (
                            <motion.li
                                key={index}
                                className="cursor-pointer py-1 text-gray-600 hover:text-red-500 transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    );
};

export default Filters;
