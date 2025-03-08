import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-3 px-1 md:px-2 min-h-screen">
      {products?.length > 0 ? (
        <div className="w-full flex flex-wrap gap-3 justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="w-full flex items-center justify-center text-2xl font-semibold">
          Not found products
        </h1>
      )}
    </div>
  );
};

export default ProductsList;
