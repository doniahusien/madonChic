import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { menProducts } from '../../../public/data/products'
const MensPage = () => {

const mensCategories = ["Men Top Wear", "Men Hoodie", "Men Bottom Wear", "Men Jackets"];
    return (
        <div className='flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100'>
            <Filters  categories={mensCategories} />
            <div className='flex-1'>
                <ProductsList products={menProducts} />
            </div>
        </div>
    )
}

export default MensPage