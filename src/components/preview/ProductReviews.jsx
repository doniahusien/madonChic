"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReviewModel from "./ReviewModel";

const ProductReviews = ({ review }) => {

  return (
    <div className="p-4">
      {/* Displaying Reviews */}
      {review.map((rev, index) => (
        <div key={index} className="flex items-start space-x-5 mt-4 border-b pb-3 w-full md:w-1/2">
          <Image
            src={rev.avatar||"/login.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="font-thin text-sm md:font-semibold md:text-base ">
              {rev.user.first_name} {rev.user.last_name}
            </p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-lg ${star <= rev.stars ? "text-yellow-400" : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p>{rev.comment}</p>
          </div>
          <p className="text-gray-500 text-sm">
            {new Date(rev.created_at).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      ))}

    </div>
  );
};

export default ProductReviews;
