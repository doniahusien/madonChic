"use client"
import React, { useState } from "react";
import { X } from "lucide-react";
const ProductReviews = () => {
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    console.log("Submitted Review:", { review, rating });
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-lg font-semibold">Total Reviews 0</h3>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Write Review
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold">Write Review</h2>

            <div className="flex gap-1 my-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea
              className="w-full border p-2 rounded mb-4"
              rows="4"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <div className="flex justify-between items-center">
             
              <button
                className="w-full bg-red-600 text-white py-2 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            <button
              className="absolute top-3 right-3 text-xl text-gray-600"
              onClick={() => setShowModal(false)}
            >
             <X />
            </button>

            <p className="text-sm text-gray-500 mt-2">
              Note: If you've already added a review, then it will be edited.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
