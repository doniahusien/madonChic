import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const productArray = Object.values(products || {});

  return (
    <div className="flex flex-wrap gap-3 px-1 md:px-2 min-h-screen">
      {productArray.length > 0 ? (
        <div className="w-full flex flex-wrap gap-3 justify-center">
          {productArray.map((product) => (
            <ProductCard key={product.id} product={product} />
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
