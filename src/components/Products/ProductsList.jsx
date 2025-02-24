import React from 'react'
import ProductCard from './ProductCard'
const ProductsList = ({ products }) => {
  return (
    <div className='flex flex-row gap-3 flex-wrap px-4'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductsList