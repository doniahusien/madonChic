"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReviewModel from "./ReviewModel";

const ProductReviews = ({ reviews }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4">
      <div className="flex w-full md:w-1/2 justify-between items-center border-b pb-2">
        <h3 className="text-lg font-semibold">
          Total Reviews {reviews.length}
        </h3>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Write Review
        </button>
      </div>

      {/* Displaying Reviews */}
      {reviews.map((rev, index) => (
        <div key={index} className="flex items-start space-x-5 mt-4 border-b pb-3 w-full md:w-1/2">
          <Image
            src={rev.avatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="font-thin text-sm md:font-semibold md:text-base ">{rev.name}</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-lg ${
                    star <= rev.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p>{rev.comment}</p>
          </div>
          <p className="text-gray-500 text-sm">{rev.date}</p>
        </div>
      ))}

      {showModal && <ReviewModel showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default ProductReviews;
