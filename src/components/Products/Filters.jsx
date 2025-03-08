"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { ListFilterPlusIcon, X } from "lucide-react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filters = ({ categories = [], onCategorySelect, max_price, onPriceChange }) => {
    const [isOpen, setOpen] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(max_price);
    const [isMdScreen, setIsMdScreen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const x = max_price;

    useEffect(() => {
        setMaxPrice(Number(max_price));
    }, [max_price]);

    useEffect(() => {
        const handleResize = () => setIsMdScreen(window.innerWidth >= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleCategoryClick = useCallback((category) => {
        setSelectedCategory(category);
        onCategorySelect(category);
    }, [onCategorySelect]);

    const handleSliderChange = useCallback(([min, max]) => {
        setMinPrice(min);
        setMaxPrice(max);
        onPriceChange(min, max);
    }, [onPriceChange]);

    const resetFilters = () => {
        setSelectedCategory("");
        setMinPrice(0);
        setMaxPrice(max_price);
        onCategorySelect("");
        onPriceChange(0, max_price);
    };

    return (
        <>
            {!isMdScreen && (
                <div className="flex text-2xl md:hidden p-5 mx-4 shadow-lg bg-white rounded-xl">
                    <button
                        onClick={() => setOpen(true)}
                        className="flex flex-row gap-2 items-center justify-center"
                        aria-label="Open Filters"
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
                className={`fixed inset-0 md:relative w-full md:w-72 bg-white py-3 px-5 rounded-lg shadow-md 
        ${isOpen ? "z-50" : "md:z-20"}`}
                style={{ display: isOpen || isMdScreen ? "block" : "none" }} // Hide when closed
            >


                <div className="flex flex-row pb-5 border-b-2 my-3 justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Filters</h1>
                    {!isMdScreen && (
                        <X
                            onClick={() => setOpen(false)}
                            className="cursor-pointer"
                            aria-label="Close Filters"
                        />
                    )}
                </div>

                <div className="mb-5">
                    <h2 className="text-gray-800 text-lg">Price</h2>
                    <div className="relative py-5">
                        <RangeSlider
                            min={0}
                            max={Number(x)}
                            step={200}
                            value={[minPrice, maxPrice]}
                            onInput={handleSliderChange}
                        />
                    </div>
                    <div className="flex justify-between font-thin text-sm mt-2">
                        <span>Min: ${minPrice}</span>
                        <span>Max: ${maxPrice}</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-gray-800 text-lg border-t-2 pt-5">Categories</h3>
                    <ul className="mt-2">
                        {categories.length ? categories.map((item, index) => (
                            <motion.li
                                key={index}
                                className={`cursor-pointer py-1 ${selectedCategory === item ? "text-red-500 font-bold" : "text-gray-600"} hover:text-red-500 transition`}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => handleCategoryClick(item)}
                            >
                                {item}
                            </motion.li>
                        )) : <p className="text-gray-500">No categories available</p>}
                    </ul>
                </div>
                <button
                    className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                    onClick={resetFilters}
                >
                    Clear Filters
                </button>
            </motion.div>
        </>
    );
};
export default Filters;