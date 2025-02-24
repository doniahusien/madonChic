import React from 'react'
import Filters from '@/components/Products/Filters'
import ProductsList from '@/components/Products/ProductsList'
import { topSelling } from '../../../public/data/products'
const topSellingPage = () => {
const topSellingCategories = ["Men Products", "Women Products"];

  return (
    <div className='flex py-4 bg-gray-100'>
            <Filters  categories={topSellingCategories} />
            <div className='flex-1'>
                <ProductsList products={topSelling} />
            </div>
        </div>
  )
}

export default topSellingPage