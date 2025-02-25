import React from 'react'
import ProductCard from './ProductCard'
const ProductsList = ({ products }) => {
  return (
    <div className='flex flex-row justify-center gap-3 flex-wrap px-1 md:px-2'>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductsList