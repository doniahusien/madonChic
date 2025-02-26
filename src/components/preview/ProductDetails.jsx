"use client"
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="p-5 space-y-4 w-full md:w-3/4 lg:w-1/3 mx-auto">
      {/* Product Name */}
      <h2 className="text-lg">{product.name}</h2>

      {/* Reviews Section */}
      <div className="flex items-center gap-10 text-xl text-gray-600">
        <span className=" text-yellow-500">⭐ 0</span>
        <span>0 Reviews</span>
      </div>

      {/* Price Section */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-red-600 text-2xl">₹{product.price}</span>
        <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
        <span className="text-green-600 text-sm">
          Save ₹{product.originalPrice - product.price} ({product.discount}%)
        </span>
      </div>

      {/* Size Selection */}
      <div className="mt-4">
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`border px-4 py-1 rounded ${
                selectedSize === size ? "bg-black text-white" : "border-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        {selectedSize && (
          <p className="text-base text-gray-700 mt-2">
            Your body measurements for {selectedSize} are Bust: X in, Waist: Y in, Hip: Z in.
          </p>
        )}
      </div>

      <div className="mt-5">
        <button className="w-full bg-black text-white py-2 rounded">
          ADD TO SHOP
        </button>
        <button className="w-full bg-black text-white py-2 rounded mt-2">
          BUY NOW
        </button>
      </div>


      <p className="text-gray-600 text-sm mt-2">
        Free Shipping on orders above ₹1500. Will ship within 3-6 days.
      </p>

      {/* Description */}
      <div className="mt-4 rounded">
        <h3 className="bg-gray-200 px-2 py-3">Description</h3>
        <p className="text-sm mt-2 pl-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
