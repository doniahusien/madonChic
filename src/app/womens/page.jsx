"use client";
import React, { useEffect,useState } from "react";
import Filters from "@/components/Products/Filters";
import ProductsList from "@/components/Products/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchWomenProducts } from "@/redux/features/home/homeThunk";
import { setCurrentPage } from "@/redux/features/home/homeSlice";
import { useSearchParams } from "next/navigation";
const WomensPage = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState("");
 const searchParams = useSearchParams();
    const categoryQuery = searchParams.get("category");
    const { women, max_price, loading, error, currentPage, totalPages, nextPageUrl, prevPageUrl } = useSelector(
        (state) => state.home
    );

    useEffect(() => {
        if (categoryQuery) {
            setSelectedCategory(categoryQuery);
        }
        dispatch(fetchWomenProducts({ 
            page: currentPage, 
            category: selectedCategory, 
            low_price: minPrice, 
            max_price: maxPrice 
        }));
    }, [dispatch, currentPage, selectedCategory, minPrice, maxPrice,categoryQuery]);

    const womenCategories = [
        "Women Top Wear",
        "Women Hoodie",
        "Women Dresses",
        "Women Suit",
        "Women Jacket",
    ];

    return (
        <div className="flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100">
            <Filters
                categories={womenCategories}
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
                        <ProductsList products={women} />
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
export default WomensPage