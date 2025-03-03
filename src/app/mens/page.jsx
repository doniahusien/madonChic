"use client";
import React,{useEffect} from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { menProducts } from '../../../public/data/products'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMenProducts } from '@/redux/features/home/homeThunk';
const MensPage = () => {
    const dispatch = useDispatch();
    const { loading, error,men } = useSelector(state => state.home); 
    useEffect(() => {
        dispatch(fetchMenProducts());
        console.log(men);
        
    }, [dispatch]);
const mensCategories = ["Men Top Wear", "Men Hoodie", "Men Bottom Wear", "Men Jackets"];
    return (
        <div className='flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100'>
            <Filters  categories={mensCategories} />
            <div className='flex-1'>
                <ProductsList products={men} />
            </div>
        </div>
    )
}

export default MensPage