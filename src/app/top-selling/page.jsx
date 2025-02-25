import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { topSelling } from '../../../public/data/products'
const topSellingPage = () => {
const topSellingCategories = ["Men Products", "Women Products"];

  return (
    <div className='flex flex-col md:flex-row pt-6 gap-4 md:gap-0 bg-gray-100'>
            <Filters  categories={topSellingCategories} />
            <div className='flex-1'>
                <ProductsList products={topSelling} />
            </div>
        </div>
  )
}

export default topSellingPage