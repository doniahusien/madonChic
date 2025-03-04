"use client";
import React, { useEffect, useState } from "react";
import Filters from "@/components/Products/Filters";
import ProductsList from "@/components/Products/ProductsList";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "@/redux/features/home/homeSlice";
import { fetchMenProducts } from "@/redux/features/home/homeThunk";

const MensPage = () => {
    const mensCategories = ["Men Top Wear", "Men Hoodie", "Men Bottom Wear", "Men Jackets"];
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState("");

    const { men, max_price, loading, error, currentPage, totalPages, nextPageUrl, prevPageUrl } = useSelector(
        (state) => state.home
    );

        useEffect(() => {
            dispatch(fetchMenProducts({ 
                page: currentPage, 
                category: selectedCategory, 
                low_price: minPrice, 
                max_price: maxPrice 
            }));
        }, [dispatch, currentPage, selectedCategory, minPrice, maxPrice]);
    
        return (
            <div className="flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100">
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
                        <p className="text-center text-gray-600">Loading products...</p>
                    ) : error ? (
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
