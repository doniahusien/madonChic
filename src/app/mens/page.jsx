"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/components/Products/Filters";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "@/redux/features/home/homeSlice";
import { fetchMenProducts } from "@/redux/features/home/homeThunk";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const ProductsList = dynamic(() => import("@/components/Products/ProductsList"));
const MensPage = () => {
    const mensCategories = ["Men Top Wear", "Men Hoodie", "Men Bottom Wear", "Men Jackets"];
    const dispatch = useDispatch();
        const { men, max_price, loading, error, currentPage, totalPages, nextPageUrl, prevPageUrl } = useSelector(
        (state) => state.home
    );
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState("");
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");


    useEffect(() => {
        if (categoryQuery) {
            setSelectedCategory(categoryQuery);
        }
        dispatch(fetchMenProducts({
            page: currentPage,
            category: categoryQuery || selectedCategory,
            low_price: minPrice,
            max_price: maxPrice
        }));
    }, [dispatch, currentPage, selectedCategory, minPrice, maxPrice, categoryQuery]);
    return (
        <div className="flex flex-col md:flex-row py-10 gap-4 md:gap-0 bg-gray-100">
            <Filters
                categories={mensCategories}
                max_price={max_price}
                onCategorySelect={setSelectedCategory}
                onPriceChange={(min, max) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                }}
            />
            <div className="flex-1">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                    </div>) : error ? (
                <p className="text-center text-red-500">{error}</p>
                ) : (
                            <>
                                
                    <ProductsList products={men} />
                    <div className="flex justify-center items-center gap-4 mt-6">
                        {prevPageUrl && (
                            <button
                                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Previous
                            </button>
                        )}
                        <span className="text-gray-700 text-lg">Page {currentPage} of {totalPages}</span>
                        {nextPageUrl && (
                            <button
                                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default MensPage;
