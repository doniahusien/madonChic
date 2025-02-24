import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { menProducts } from '../../../public/data/products'
const MensPage = () => {

const mensCategories = ["Men Top Wear", "Men Hoodie", "Men Bottom Wear", "Men Jackets"];
    return (
        <div className='flex py-4 bg-gray-100'>
            <Filters  categories={mensCategories} />
            <div className='flex-1'>
                <ProductsList products={menProducts} />
            </div>
        </div>
    )
}

export default MensPage