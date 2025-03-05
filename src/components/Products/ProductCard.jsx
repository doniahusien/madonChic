"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.5 }} 
      className='bg-white w-[200px] md:w-[280px] h-[350px] relative overflow-hidden rounded-lg shadow-md cursor-pointer'
    >
      <Link href={`/perview/${product.id}`} className='flex flex-col items-start '>
        <div className='w-full h-[270px] relative overflow-hidden'>
          <Image
            src={product.image_1}
            alt="product"
            layout="fill" 
            className='rounded-t-lg transition-transform duration-700 hover:scale-105' 
          />
        </div>
        
        <h1 className='text-sm font-semibold mt-2 pl-4'>{product.name}</h1>
        
        <div className='flex flex-row gap-2 mt-1 text-sm pl-4'>
          <h2 className='text-red-600 font-bold'>${product.price_after_discount}</h2>
          <h2 className='line-through text-gray-500'>${product.price}</h2>
          <h2 className='text-green-500'>{product.discount}% off</h2>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
