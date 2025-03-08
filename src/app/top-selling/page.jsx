"use client";
import React, { useEffect, useState } from 'react'
import Filters from '@/components/Products/Filters'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopSellingProducts } from '@/redux/features/home/homeThunk'
import dynamic from "next/dynamic";

const ProductsList = dynamic(() => import("@/components/Products/ProductsList"));

const topSellingPage = () => {
  const { top_selling, max_price, loading } = useSelector((state) => state.home);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopSellingProducts({
      category: selectedCategory,
      low_price: minPrice,
      max_price: maxPrice
    }));
  }, [dispatch, selectedCategory, minPrice, maxPrice]);

  const topSelling = ["men", "women"];

  return (
    <div className='flex flex-col md:flex-row py-10 gap-4 md:gap-0 bg-gray-100'>
      <Filters
        categories={topSelling}
        max_price={max_price}
        onCategorySelect={setSelectedCategory}
        onPriceChange={(min, max) => {
          setMinPrice(min);
          setMaxPrice(max);
        }}
      />
      <div className='flex-1'>
        <ProductsList products={top_selling} />
      </div>
    </div>
  )
}


export default topSellingPage