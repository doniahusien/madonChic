import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { womenProducts } from '../../../public/data/products'
const womensPage = () => {
    const womenCategories = ["Women Top Wear", "Women Hoodie", "Women Dresses", "Women Suit", "Women Jacket",];
    return (
        <div className='flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100'>
            <Filters categories={womenCategories} />
            <div className='flex-1'>
                <ProductsList products={womenProducts} />
            </div>

        </div>
    )
}

export default womensPage