"use client";
import React, { useState } from "react";
import { ListFilterPlusIcon } from "lucide-react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { X } from "lucide-react";

const Filters = ({ categories }) => {
    const [isOpen, setOpen] = useState(false);
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
        <>
            <div className={` ${isOpen ? "hidden" : "flex"} text-2xl flex md:hidden p-5 mx-4 shadow-lg bg-white rounded-xl`}>
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="flex flex-row gap-2 items-center justify-center">
                    <ListFilterPlusIcon />
                    <span>Filters</span>
                </button>
            </div>

            <div className={`${isOpen ? " fixed inset-0 z-50 w-full transition-transform duration-700 " : " hidden"} md:block md:w-72 bg-white py-3 px-5 h-screen  rounded-lg shadow-md`}>
                <div className="flex flex-row pb-5 border-b-2 my-3 justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Filters</h1>
                    <X onClick={()=>{setOpen(!isOpen)}} className={`${isOpen?" block":"hidden"} cursor-pointer`} />
                </div>

                <div className="mb-5">
                    <h2 className="text-gray-800 text-lg">Price</h2>
                    <div className="relative py-5">
                        <RangeSlider
                            min={0}
                            max={2500}
                            step={200}
                            value={[minPrice, maxPrice]}
                            onInput={handleSliderChange}
                        />
                    </div>

                    <div className="flex justify-between font-thin text-sm mt-2">
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
        </>
    );
};

export default Filters;
