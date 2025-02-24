import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { womenProducts } from '../../../public/data/products'
const womensPage = () => {
    const womenCategories = ["Women Top Wear", "Women Hoodie", "Women Dresses", "Women Suit", "Women Jacket",];
    return (
        <div className='flex py-4 bg-gray-100'>
            <Filters categories={womenCategories} />
            <div className='flex-1'>
                <ProductsList products={womenProducts} />
            </div>

        </div>
    )
}

export default womensPage