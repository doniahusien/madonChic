"use client"
import React, { useEffect } from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { womenProducts } from '../../../public/data/products'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWomenProducts } from '@/redux/features/home/homeThunk'
const womensPage = () => {
    const {women,loading} = useSelector(state => state.home);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWomenProducts());
    }, [dispatch]);
    const womenCategories = ["Women Top Wear", "Women Hoodie", "Women Dresses", "Women Suit", "Women Jacket",];
    return (
        <div className='flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100'>
            <Filters categories={womenCategories} />
            <div className='flex-1'>
                <ProductsList products={women} />
            </div>

        </div>
    )
}

export default womensPage