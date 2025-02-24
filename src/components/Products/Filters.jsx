"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filters = ({ categories }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2500);

    const handleSliderChange = ([min, max]) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    const handleMinChange = (e) => {
        let value = parseInt(e.target.value);
        if (value >= 0 && value < maxPrice) setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        let value = parseInt(e.target.value);
        if (value > minPrice && value <= 2500) setMaxPrice(value);
    };

    return (
        <div className="bg-white p-5 h-screen w-72 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-3 pb-5 border-b-2 text-gray-800">Filters</h1>

            <div className="mb-5">
                <h2 className="text-gray-800 text-lg">Price</h2>

                {/* Multi-Range Slider */}
                <div className="relative py-5">
                    <RangeSlider
                        min={0}
                        max={2500}
                        step={200}
                        value={[minPrice, maxPrice]}
                        onInput={handleSliderChange}
                    />
                </div>

                <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-700">
                        Min
                        <input
                            readOnly
                            type="number"
                            value={minPrice}
                            onChange={handleMinChange}
                            className="p-1 rounded-md ml-2 w-16 text-center border border-gray-500"
                        />
                    </span>
                    <span className="text-gray-700">
                        Max
                        <input
                            readOnly
                            type="number"
                            value={maxPrice}
                            onChange={handleMaxChange}
                            className="p-1 rounded-md ml-2 w-16 text-center border border-gray-500"
                        />
                    </span>
                </div>
            </div>

            <div>
                <h3 className="text-gray-800 text-lg border-t-2 pt-5">Categories</h3>
                <ul className="mt-2">
                    {categories.map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer py-1 text-gray-600 hover:text-red-500 transition"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Filters;
